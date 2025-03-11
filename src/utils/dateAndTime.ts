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

export const setUrgencyLevel = (date: string, time: string) => {
  if (!date || !time) return;
  const dueDateInMilliseconds = convertDateAndTimeToMilliseconds(date, time);
  const nowInMilliseconds = Date.now();
  const difference = dueDateInMilliseconds - nowInMilliseconds;
  const dayInMilliseconds = 24 * 60 * 60 * 1000;

  if (difference / dayInMilliseconds < 1)
    return {
      background: "bg-[var(--custom-danger-primary)]",
      text: "text-[var(--custom-danger-primary)]",
    };
  else if (difference / dayInMilliseconds < 3)
    return {
      background: "bg-[var(--custom-warning)]",
      text: "text-[var(--custom-warning)]",
    };
  else
    return {
      background: "bg-[var(--custom-primary)]",
      text: "text-[var(--custom-primary)]",
    };
};
