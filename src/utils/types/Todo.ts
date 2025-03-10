export interface SubtaskInterface {
  name: string;
  isCompleted: boolean;
}

export interface TagsInterface {
  name: string;
  color: string;
}

export interface TodoInterface {
  id: string;
  name: string;
  isCompleted: boolean;
  priority: number;
  complexity: number;
  createdAt: number;
  date: string;
  time: string;
  subtasks: SubtaskInterface[];
  tags: TagsInterface[];
}
