import { TagsInterface } from "./types/Todo";

export const checkForTags = (
  todoTags: TagsInterface[],
  stateTags: string[],
): boolean => {
  if (!stateTags.length) return true;
  return stateTags.every((category) =>
    todoTags.find((tag) => tag.name === category),
  );
};
