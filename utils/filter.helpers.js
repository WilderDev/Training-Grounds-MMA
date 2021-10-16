import { getDaysBetweenDates } from "./time.helpers";

// TSK: Add all the filters we can search by: [type, accommodation, isFeatured, saved, skill-level]
// Comparison Queries: https://docs.mongodb.com/manual/reference/operator/query-comparison/

export function buildFilterByQuery({
  location,
  startDate,
  endDate,
  numFighters,
  trainingModalities,
}) {
  let lengthOfStay;

  if (startDate && endDate)
    lengthOfStay = getDaysBetweenDates(endDate, startDate);

  let filter = {
    ...(location && {
      $or: [{ country: { $eq: location } }, { city: { $eq: location } }],
    }),
    ...(lengthOfStay && {
      max_length_stay: { $gte: Math.round(lengthOfStay) },
    }),
    ...(numFighters && {
      open_spaces: { $gte: parseInt(numFighters) },
    }),
    ...(trainingModalities?.length > 0 && {
      styles_offered: { $in: trainingModalities },
    }),
    isAvailable: { $eq: true },
  };

  return filter;
}
