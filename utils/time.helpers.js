export function getDaysBetweenDates(end, start) {
  const endDateTime = new Date(end).getTime();
  const startDateTime = new Date(start).getTime();
  const daysDifference = (endDateTime - startDateTime) / (1000 * 60 * 60 * 24);

  return daysDifference + 1;
}
