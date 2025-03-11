"use client";

// "bg-tag-1", "bg-tag-2", "bg-tag-3", "bg-[var(--custom-danger-primary)]",
// "bg-[var(--custom-warning)]", "bg-[var(--custom-primary)]",
// "text-[var(--custom-danger-primary)]", "text-[var(--custom-warning)]",
// "text-[var(--custom-primary)]"

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TodoInterface } from "@/utils/types/Todo";
import {
  ArrowsIcon,
  ArrowUpIcon,
  CalendarIcon,
  CheckIconSmall,
  EditTaskIconSmall,
  TrashIcon,
} from "../../icons";
import ProgressCircle from "./ProgressCircle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/taskDetails/ProgressBar";
import { useAppDispatch } from "@/lib/hooks";
import { removeTodo, toggleTodo } from "@/lib/features/todo/todosSlice";
import {
  calculatePercentage,
  getCompletedSubtasksCount,
} from "@/utils/calculatePercentage";
import { setUrgencyLevel } from "@/utils/dateAndTime";
import { numberToPriorityLevel } from "@/utils/numberToPriorityLevel";

interface TaskCardProps {
  todo: TodoInterface;
  large?: boolean;
}

const TaskCard = ({ todo, large }: TaskCardProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const subtaskCount = todo.subtasks.length;
  const completedSubtasks = getCompletedSubtasksCount(todo.subtasks);
  const percentage = calculatePercentage(subtaskCount, completedSubtasks);
  const urgency = setUrgencyLevel(todo.date, todo.time);

  return (
    <li className="[&:not(:last-child)]:mb-6">
      <Card className="w-fill relative [&>svg]:absolute [&>svg]:bottom-0 [&>svg]:right-0 [&>svg]:mb-12 [&>svg]:mr-3">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className={`flex gap-2 ${large && "mb-3"}`}>
              <div
                className={`h-4 w-4 rounded-full border-none ${urgency?.background}`}
              ></div>
              <h2
                className="hover:cursor-pointer"
                onClick={() => router.push(`/task-detail/${todo.id}`)}
              >
                {todo.name}
              </h2>
            </div>
            {!large && (
              <div className="flex gap-3">
                <Link
                  href={`/edit-task/${todo.id}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--custom-secondary)]"
                >
                  <EditTaskIconSmall />
                </Link>
                <Button
                  variant="round"
                  size="smCustom"
                  onClick={() => dispatch(removeTodo(todo))}
                >
                  <TrashIcon />
                </Button>
                <Button
                  variant="round"
                  size="smCustom"
                  onClick={() => dispatch(toggleTodo(todo))}
                >
                  <CheckIconSmall />
                </Button>
              </div>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className={`flex flex-col gap-${large ? "4" : "1.5"}`}>
          <div className="flex gap-1.5">
            <CalendarIcon />
            <div>
              <span className="text-[var(--custom-grey)]">Due Data: </span>
              <span className={`${urgency?.text}`}>
                {todo.date}, {todo.time}
              </span>
            </div>
          </div>
          <div className="flex gap-1.5">
            <ArrowUpIcon />
            <div>
              <span className="text-[var(--custom-grey)]">Priority: </span>
              <span>{numberToPriorityLevel(todo.priority)}</span>
            </div>
          </div>
          <div className="flex gap-1.5">
            <ArrowsIcon />
            <div>
              <span className="text-[var(--custom-grey)]">Complexity: </span>
              <span>{numberToPriorityLevel(todo.complexity)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-4">
          {!large &&
            todo.tags.map((tag) => {
              return (
                <div
                  key={tag.name}
                  className={`rounded-[20px] px-2 py-1 text-[12px] ${tag.color}`}
                >
                  {tag.name}
                </div>
              );
            })}
          {large && <ProgressBar value={percentage} />}
        </CardFooter>
        {!large && <ProgressCircle color="blue" percentage={percentage} />}
      </Card>
    </li>
  );
};

export default TaskCard;
