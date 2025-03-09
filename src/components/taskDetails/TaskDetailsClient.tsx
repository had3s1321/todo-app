"use client";

import TaskCard from "@/components/ui/custom/TaskCard";
import Subtask from "../ui/custom/Subtask";
import { Button } from "../ui/button";
import { CheckIcon, RepeatIcon, TrashIcon } from "../ui/icons";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useAppDispatch } from "@/lib/hooks";
import { SubtaskInterface } from "@/utils/types/Todo";
import { editTodo } from "@/lib/features/todo/todosSlice";

const TaskDetailsClient = ({ taskId }: { taskId: string }) => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();
  const todo = todos.find((el) => el.id === taskId);
  if (typeof todo === "undefined") {
    throw new Error("Todo not found");
  }

  const toggleSubtask = (subtask: SubtaskInterface) => {
    const newSubtasks = todo.subtasks.map((el) => {
      if (el.name === subtask.name)
        return { ...el, isCompleted: !el.isCompleted };
      return el;
    });
    const newTodo = { ...todo, subtasks: newSubtasks };
    dispatch(editTodo(newTodo));
  };

  return (
    <>
      <TaskCard todo={todo} large />
      {todo.subtasks.map((subtask) => (
        <Subtask name={subtask.name} key={subtask.name}>
          <Button
            type="button"
            variant="round"
            size="lgCustom"
            className={`absolute right-[2%] top-[10%] flex bg-[var(--custom-${subtask.isCompleted ? "primary" : "secondary"})] px-2`}
            onClick={() => toggleSubtask(subtask)}
          >
            <CheckIcon light={subtask.isCompleted ? true : false} />
          </Button>
        </Subtask>
      ))}
      <Button
        size="xlCustomFull"
        className="bg-[var(--custom-primary)] text-[18px] text-[var(--custom-light)]"
      >
        <RepeatIcon />
        Repeat Tasks
      </Button>
      <Button
        size="xlCustomFull"
        className="bg-[var(--custom-danger-secondary)] text-[18px]"
      >
        <TrashIcon />
        Delete Tasks
      </Button>
    </>
  );
};

export default TaskDetailsClient;
