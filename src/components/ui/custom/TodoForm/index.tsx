"use client";

import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { formSchema } from "./formSchema";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckIcon, DeleteIcon } from "../../icons";
import Subtask from "../Subtask";
import { useAppDispatch } from "@/lib/hooks";
import { addTodo, editTodo } from "@/lib/features/todo/todosSlice";
import { v4 as uuidv4 } from "uuid";
import { getTags } from "@/utils/getTags";
import { handleFormDefaultValues } from "@/utils/handleFormDefaultValues";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

interface TodoFormProps {
  taskId?: string;
}

const TodoForm = ({ taskId }: TodoFormProps) => {
  const subtaskRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  let taskData;
  if (taskId) taskData = todos.find((todo) => todo.id === taskId);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: handleFormDefaultValues(taskData),
  });

  const addSubtask = () => {
    if (!subtaskRef.current) return;

    const newSubtask = subtaskRef.current.value.trim();
    if (!newSubtask) return;

    if (form.getValues("subtasks").includes(newSubtask)) return;

    form.setValue("subtasks", [...form.getValues("subtasks"), newSubtask]);
    form.trigger("subtasks");
    subtaskRef.current.value = "";
  };

  const removeSubtask = (subtask: string) => {
    form.setValue(
      "subtasks",
      form.getValues("subtasks").filter((el) => el !== subtask),
    );
  };

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    const now = Date.now();
    const payload = {
      id: taskId ? taskId : uuidv4(),
      name: values.name,
      isCompleted: false,
      priority: Number(values.priority),
      complexity: Number(values.complexity),
      createdAt: now,
      date: format(values.date, "yyyy-MM-dd"),
      time: values.time,
      subtasks: values.subtasks.map((subtask) => {
        return { name: subtask, isCompleted: false };
      }),
      tags: getTags(values.tags),
    };
    if (taskId) {
      dispatch(editTodo(payload));
    } else dispatch(addTodo(payload));
    router.push("/");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-[18px]">Task Name</FormLabel>
              <FormControl>
                <Input placeholder="Add a task..." {...field} />
              </FormControl>
              <FormMessage className="absolute" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-[18px]">
                Select Priority level
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-wrap gap-2"
                >
                  {[...Array(10)].map((_, i) => (
                    //eslint-disable-next-line
                    <div key={i + 1} className="relative">
                      <RadioGroupItem
                        value={(i + 1).toString()}
                        id={`number-${i + 1}`}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`number-${i + 1}`}
                        className="text-sm flex h-8 w-8 items-center justify-center rounded-full bg-[var(--custom-secondary)] font-medium ring-offset-background transition-colors hover:cursor-pointer hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 peer-data-[state=checked]:bg-[var(--custom-primary)] peer-data-[state=checked]:text-primary-foreground"
                      >
                        {i + 1}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="complexity"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-[18px]">
                Select Complexity level
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-wrap gap-2"
                >
                  {[...Array(10)].map((_, i) => (
                    //eslint-disable-next-line
                    <div key={i + 1} className="relative">
                      <RadioGroupItem
                        value={(i + 1).toString()}
                        id={`number-${i + 100}`}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`number-${i + 100}`}
                        className="text-sm flex h-8 w-8 items-center justify-center rounded-full bg-[var(--custom-secondary)] font-medium ring-offset-background transition-colors hover:cursor-pointer hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 peer-data-[state=checked]:bg-[var(--custom-primary)] peer-data-[state=checked]:text-primary-foreground"
                      >
                        {i + 1}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex gap-8">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="relative text-[18px]">
                  Select Due Date
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="date"
                        className={cn(
                          "h-10 w-full border pl-4 text-left text-[16px] font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "dd-MM-yyyy")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon
                          className="ml-auto h-4 w-4 fill-none stroke-[var(--custom-primary)] opacity-80"
                          strokeWidth={2.5}
                        />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date <= new Date() || date < new Date("1900-01-01")
                      }
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage className="absolute" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className="relative w-[264px]">
                <FormLabel className="text-[18px]">Select Time</FormLabel>
                <FormControl>
                  <Input
                    type="time"
                    className="custom-time-picker h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="absolute" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subtasks"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]">
                Add Checklist for subtasks
              </FormLabel>
              {Array.isArray(field.value) &&
                field.value.map((subtask) => (
                  <Subtask name={subtask} key={subtask}>
                    <Button
                      type="button"
                      variant="round"
                      className="absolute right-[2%] top-[20%] flex bg-[var(--custom-danger-secondary)] px-2"
                      onClick={() => removeSubtask(subtask)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Subtask>
                ))}
              <FormControl>
                <div className="relative">
                  <Input placeholder="Add a subtask..." ref={subtaskRef} />
                  <Button
                    type="button"
                    variant="round"
                    className="absolute right-[2%] top-[20%] flex px-2"
                    onClick={addSubtask}
                  >
                    <CheckIcon />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]">Add Tags</FormLabel>
              <FormControl>
                <Input
                  placeholder="Separate the tags with a comma..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="submit" size="xlCustom">
          <p className="text-[18px]">Save Task</p>
        </Button>
      </form>
    </Form>
  );
};

export default TodoForm;
