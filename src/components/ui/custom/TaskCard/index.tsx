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

interface TaskCardProps {
  todo: TodoInterface;
  large?: boolean;
}

const TaskCard = ({ todo, large }: TaskCardProps) => {
  return (
    <Card className="w-fill relative [&>svg]:absolute [&>svg]:bottom-0 [&>svg]:right-0 [&>svg]:mb-12 [&>svg]:mr-3">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full border-none bg-red-500"></div>
            <h2>{todo.name}</h2>
          </div>
          <div className="flex gap-3">
            <Button variant="round" size="smCustom">
              <EditTaskIconSmall />
            </Button>
            <Button variant="round" size="smCustom">
              <CheckIconSmall />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1.5">
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
        {todo.tags.map((tag) => {
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
      </CardFooter>
      {!large && <ProgressCircle color="blue" percentage={50} />}
    </Card>
  );
};

export default TaskCard;
