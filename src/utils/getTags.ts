import { pickRandomColor } from "@/utils/getRandomColor";

interface Tag {
  name: string;
  color: string;
}

export const getTags = (string: string) => {
  if (!string || !string.trim()) return [{ name: "N/A", color: "N/A" }];
  const result: Tag[] = [];
  string.split(",").forEach((tag) => {
    if (result.filter((el) => el.name === tag.trim()).length === 1) return;
    result.push({ name: tag.trim(), color: pickRandomColor() });
  });
  return result;
};
