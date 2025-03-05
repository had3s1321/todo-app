export const convertDateAndTimeToMilliseconds = (
  date: string,
  time: string,
) => {
  const d = new Date(date);
  const [hours, minutes] = time.split(":");
  const dateInMilliseconds = Number(d.getTime());
  const timeInMilliseconds = +hours * 60 * 60 * 1000 + +minutes * 60 * 60;
  return dateInMilliseconds + timeInMilliseconds;
};
