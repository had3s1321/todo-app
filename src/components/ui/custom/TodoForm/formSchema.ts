import { z } from "zod";

export const formSchema = z.object({
  name: z.string({ message: "Task name is required" }).trim().min(3),
  priority: z.number().min(1).max(10),
  complexity: z.number().min(1).max(10),
  date: z
    .date({ message: "Please select the date" })
    .min(new Date(), { message: "Please enter a valid date" }),
  time: z.string({ message: "Please select the time" }).time(),
  subtasks: z.string().trim().array(),
  tags: z.string(),
});
