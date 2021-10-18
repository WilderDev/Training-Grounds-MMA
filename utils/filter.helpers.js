import { getDaysBetweenDates } from "./time.helpers";

export function buildFilterByQuery({
  location,
  startDate,
  endDate,
  numFighters,
  trainingModalities,
  priceTier,
  skillLevels,
  accommodations,
  isFeatured,
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
      open_spaces: { $gte: numFighters },
    }),
    ...(trainingModalities?.length > 0 && {
      styles_offered: { $in: trainingModalities },
    }),
    ...(priceTier?.length > 0 && {
      price_tier: { $in: priceTier },
    }),
    ...(skillLevels?.length > 0 && {
      skill_levels: { $in: skillLevels },
    }),
    // ...(accommodations?.length > 0 && {
    //   accommodation_options: { $elemMatch: { name: { $in: accommodations } } },
    // }),
    ...(isFeatured && {
      is_featured: { $eq: true },
    }),
    is_available: { $eq: true },
  };

  return filter;
}
