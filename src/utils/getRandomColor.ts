const colorList = ["tag-1", "tag-2", "tag-3"];

export const pickRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const color = colorList[randomNumber];
  return `bg-${color}`;
};
