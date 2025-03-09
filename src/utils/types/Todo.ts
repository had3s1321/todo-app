export interface SubtaskInterface {
  name: string;
  isCompleted: boolean;
}

export interface TodoInterface {
  id: string;
  name: string;
  isCompleted: boolean;
  priority: number;
  complexity: number;
  date: string;
  time: string;
  subtasks: SubtaskInterface[];
  tags: {
    name: string;
    color: string;
  }[];
}
