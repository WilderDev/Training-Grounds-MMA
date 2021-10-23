export function getDaysBetweenDates(end, start) {
  const endDateTime = new Date(end).getTime();
  const startDateTime = new Date(start).getTime();
  const daysDifference = (endDateTime - startDateTime) / (1000 * 60 * 60 * 24);

  return daysDifference + 1;
}

// IX_TSK, take in a second argument, locale and format accordingly
export function getLocalDateString(date) {
  return date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function getMonthAndYear(date) {
  return new Date(date).toLocaleDateString("en-us", {
    month: "long",
    year: "numeric",
  });
}
