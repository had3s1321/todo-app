export const numberToPriorityLevel = (num: number) => {
  let level = "";
  if (num < 4) level = "Low";
  else if (num < 8) level = "Medium";
  else level = "High";
  return `${level} (${num}/10)`;
};
