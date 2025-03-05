import { TodoInterface } from "./types/Todo";

export const handleFormDefaultValues = (data: TodoInterface | undefined) => {
  if (data)
    return {
      name: data.name,
      priority: data.priority.toString(),
      complexity: data.complexity.toString(),
      date: new Date(data.date),
      time: data.time,
      subtasks: data.subtasks.map((subtask) => subtask.name),
      tags: data.tags.map((tag) => tag.name).join(", "),
    };
  return {
    name: "",
    priority: "1",
    complexity: "1",
    date: new Date(),
    time: "",
    subtasks: [],
    tags: "",
  };
};
