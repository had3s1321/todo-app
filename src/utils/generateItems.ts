import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import { pickRandomColor } from "./getRandomColor";

const generateSubtasks = (num: number) => {
  const subtasks = [];
  for (let i = 0; i < num; i++) {
    const subtask = {
      name: `${i + 1}. ${faker.lorem.sentence({ min: 3, max: 7 })}`,
      isCompleted: false,
    };
    subtasks.push(subtask);
  }
  return subtasks;
};

const generateTags = (num: number) => {
  const tags = [];
  for (let i = 0; i < num; i++) {
    const tag = {
      name: faker.word.noun(),
      color: pickRandomColor(),
    };
    tags.push(tag);
  }
  return tags;
};

export const generateItems = (num: number) => {
  if (!num || typeof num === "string") return [];
  const todos = [];
  const today = Date.now();
  const nextWeek = today + 7 * 24 * 60 * 60 * 1000;

  for (let i = 0; i < num; i++) {
    const dateAndTime = faker.date
      .between({ from: Date.now(), to: nextWeek })
      .toISOString();
    const todo = {
      id: uuidv4(),
      task: faker.lorem.sentence({ min: 3, max: 5 }),
      priority: faker.number.int({ min: 1, max: 10 }),
      complexity: faker.number.int({ min: 1, max: 10 }),
      date: dateAndTime.substring(0, 10),
      time: dateAndTime.substring(11, 16),
      subtasks: generateSubtasks(faker.number.int({ min: 1, max: 6 })),
      tags: generateTags(faker.number.int({ min: 1, max: 3 })),
      isCompleted: false,
    };
    todos.push(todo);
  }
  return todos;
};
