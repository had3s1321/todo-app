import TaskCard from "@/components/ui/custom/TaskCard/index";

const todos = [
  {
    id: "1",
    name: "Buy groceries",
    priority: 7,
    complexity: 3,
    date: "2025-02-22",
    time: "15:30",
    subtasks: [
      { id: "1-1", name: "Get milk", isCompleted: false },
      { id: "1-2", name: "Buy bread", isCompleted: true },
      { id: "1-3", name: "Pick up vegetables", isCompleted: false },
    ],
    tags: [
      { name: "Shopping", color: "#ff9800" },
      { name: "Errands", color: "#4caf50" },
    ],
    isCompleted: false,
  },
  {
    id: "2",
    name: "Complete React project",
    priority: 9,
    complexity: 8,
    date: "2025-02-25",
    time: "18:00",
    subtasks: [
      { id: "2-1", name: "Finish UI design", isCompleted: false },
      { id: "2-2", name: "Implement API calls", isCompleted: false },
      { id: "2-3", name: "Write documentation", isCompleted: false },
    ],
    tags: [
      { name: "Work", color: "#2196f3" },
      { name: "Coding", color: "#9c27b0" },
    ],
    isCompleted: false,
  },
  {
    id: "3",
    name: "Workout session",
    priority: 6,
    complexity: 5,
    date: "2025-02-23",
    time: "07:00",
    subtasks: [
      { id: "3-1", name: "Warm-up", isCompleted: true },
      { id: "3-2", name: "Strength training", isCompleted: false },
      { id: "3-3", name: "Stretching", isCompleted: false },
    ],
    tags: [
      { name: "Health", color: "#e91e63" },
      { name: "Fitness", color: "#673ab7" },
    ],
    isCompleted: false,
  },
];

const TodosList = () => {
  return (
    <>
      {todos.map((todo) => (
        <TaskCard todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default TodosList;
