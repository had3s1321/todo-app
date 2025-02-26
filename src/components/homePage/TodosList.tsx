"use client";

import TaskCard from "@/components/ui/custom/TaskCard/index";
import { useAppSelector } from "@/lib/hooks";

const TodosList = () => {
  const todos = useAppSelector((state) => state.todos);

  return (
    <>
      {todos.map((todo) => (
        <TaskCard todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default TodosList;
