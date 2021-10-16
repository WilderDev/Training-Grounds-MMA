import { getDaysBetweenDates } from "./time.helpers";

// TSK: Add all the filters we can search by: [type, accommodation, isFeatured, saved, skill-level]
// Comparison Queries: https://docs.mongodb.com/manual/reference/operator/query-comparison/

export function buildFilterByQuery({
  location,
  startDate,
  endDate,
  numFighters,
  types,
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
    ...(types && {
      styles_offered: { $in: types },
    }),
    isAvailable: { $eq: true },
  };

  return filter;
}
