import { SubtaskInterface } from "./types/Todo";

export const getCompletedSubtasksCount = (array: SubtaskInterface[]) => {
  if (!array.length || !array) return 0;
  return array.reduce((acc, cur) => {
    if (cur.isCompleted) acc++; // eslint-disable-line
    return acc;
  }, 0);
};

export const calculatePercentage = (total: number, completed: number) => {
  if (!total) return 0;
  return Math.round((completed / total) * 100);
};
