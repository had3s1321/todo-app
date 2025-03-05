"use client";

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
} from "../../icons";
import ProgressCircle from "./ProgressCircle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/taskDetails/ProgressBar";
import { useAppDispatch } from "@/lib/hooks";
import { toggleTodo } from "@/lib/features/todo/todoSlice";

interface TaskCardProps {
  todo: TodoInterface;
  large?: boolean;
}

const TaskCard = ({ todo, large }: TaskCardProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <Card className="w-fill relative [&>svg]:absolute [&>svg]:bottom-0 [&>svg]:right-0 [&>svg]:mb-12 [&>svg]:mr-3">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full border-none bg-red-500"></div>
            <h2
              className="hover:cursor-pointer"
              onClick={() => router.push(`/task-detail/${todo.id}`)}
            >
              {todo.name}
            </h2>
          </div>
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
              onClick={() => dispatch(toggleTodo(todo))}
            >
              <CheckIconSmall />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className={`flex flex-col gap-${large ? "4" : "1.5"}`}>
        <div className="flex gap-1.5">
          <CalendarIcon />
          <div>
            Due Data: {todo.date}, {todo.time}
          </div>
        </div>
        <div className="flex gap-1.5">
          <ArrowUpIcon />
          <div>Priority: {todo.priority}</div>
        </div>
        <div className="flex gap-1.5">
          <ArrowsIcon />
          <div>Complexity: {todo.complexity}</div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        {!large &&
          todo.tags.map((tag) => {
            return (
              <div
                key={tag.name}
                className="rounded-[20px] px-2 py-1 text-[12px]"
                style={{ background: tag.color }}
              >
                {tag.name}
              </div>
            );
          })}
        {large && <ProgressBar />}
      </CardFooter>
      {!large && <ProgressCircle color="blue" percentage={50} />}
    </Card>
  );
};

export default TaskCard;
