"use client";

import TaskCard from "@/components/ui/custom/TaskCard/index";
import { useAppSelector } from "@/lib/hooks";
import { checkForTags } from "@/utils/checkForTags";
import { handleSort } from "@/utils/handleSort";

const TodosList = ({ status }: { status: "completed" | "pending" }) => {
  const todos = useAppSelector((state) => state.todos);
  const options = useAppSelector((state) => state.options);
  const { sortOption, selectedCategories } = options;
  let list = [];
  if (status === "completed") list = todos.filter((todo) => todo.isCompleted);
  else list = todos.filter((todo) => !todo.isCompleted);

  return (
    <>
      {list
        .filter((todo) => checkForTags(todo.tags, selectedCategories) && todo)
        .sort((a, b) => handleSort(sortOption, a, b))
        .map((todo) => (
          <TaskCard todo={todo} key={todo.id} />
        ))}
    </>
  );
};

export default TodosList;
