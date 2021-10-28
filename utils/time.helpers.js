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

export const isDailyRate = (days) => days < 7;
export const isWeeklyRate = (days) => days >= 7 && days < 29;
export const isMonthlyRate = (days) => days >= 29 && days < 349;
export const isYearlyRate = (days) => days >= 349;

export function getTimeScale(days) {
  let timeScale;

  if (isDailyRate(days)) timeScale = days === 1 ? "day" : "days";
  if (isWeeklyRate(days)) timeScale = days % 7 === 0 ? "week" : "weeks";
  if (isMonthlyRate(days)) timeScale = days % 29 === 0 ? "month" : "months";
  if (isYearlyRate(days)) timeScale = days % 349 === 0 ? "year" : "years";

  return timeScale;
}
