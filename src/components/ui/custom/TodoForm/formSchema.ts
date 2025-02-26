import { z } from "zod";

export const formSchema = z.object({
  name: z.string({ message: "Task name is required" }).trim().min(3),
  priority: z.string().regex(/\b([1-9]|10)\b/),
  complexity: z.string().regex(/\b([1-9]|10)\b/),
  date: z
    .date({ message: "Please select the date" })
    .min(new Date(), { message: "Please enter a valid date" }),
  time: z
    .string({ message: "Please select the time" })
    .regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/),
  subtasks: z.string().trim().array(),
  tags: z.string(),
});
