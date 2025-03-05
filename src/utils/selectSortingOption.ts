import { convertDateAndTimeToMilliseconds } from "./convertDateAndTimeToMilliseconds";
import { TodoInterface } from "./types/Todo";

type SortingOptions =
  | "Default"
  | "Ascending Date"
  | "Descending Date"
  | "Ascending Complexity"
  | "Descending Complexity"
  | "Ascending Priority"
  | "Descending Priority"
  | "Power Mode";

export const sortingOptions = [
  "Default",
  "Ascending Date",
  "Descending Date",
  "Ascending Complexity",
  "Descending Complexity",
  "Ascending Priority",
  "Descending Priority",
];

export const selectSortingOption = (
  option: SortingOptions,
  a: TodoInterface,
  b: TodoInterface,
) => {
  switch (option) {
    case "Ascending Date":
      return (
        convertDateAndTimeToMilliseconds(a.date, a.time) -
        convertDateAndTimeToMilliseconds(b.date, b.time)
      );
    case "Descending Date":
      return (
        convertDateAndTimeToMilliseconds(b.date, b.time) -
        convertDateAndTimeToMilliseconds(a.date, a.time)
      );

    case "Ascending Complexity":
      return a.complexity - b.complexity;
    case "Descending Complexity":
      return b.complexity - a.complexity;
    case "Ascending Priority":
      return a.priority - b.priority;
    case "Descending Priority":
      return b.priority - a.priority;
    case "Power Mode":
      return b.priority + b.complexity - (a.priority + a.complexity);
    default:
      return;
  }
};
