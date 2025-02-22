export interface TodoInterface {
  id: string;
  name: string;
  isCompleted: boolean;
  priority: number;
  complexity: number;
  date: string;
  time: string;
  subtasks: {
    id: string;
    name: string;
    isCompleted: boolean;
  }[];
  tags: {
    name: string;
    color: string;
  }[];
}
