const colorList = ["--custom-tag1", "--custom-tag2", "--custom-tag3"];

export const pickRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const color = colorList[randomNumber];
  return color;
};
