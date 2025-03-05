"use client";

import TaskCard from "@/components/ui/custom/TaskCard/index";
import { useAppSelector } from "@/lib/hooks";

const TodosList = ({ status }: { status: "completed" | "pending" }) => {
  const todos = useAppSelector((state) => state.todos);
  let list = [];
  if (status === "completed") list = todos.filter((todo) => todo.isCompleted);
  else list = todos.filter((todo) => !todo.isCompleted);

  return (
    <>
      {list.map((todo) => (
        <TaskCard todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default TodosList;
