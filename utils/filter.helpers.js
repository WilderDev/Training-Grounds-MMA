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
    // All Three
    ...(types &&
      types.includes("mma") &&
      types.includes("bjj") &&
      types.includes("mt") && {
        $or: [
          { styles_offered: { $elemMatch: { $eq: "MMA" } } },
          { styles_offered: { $elemMatch: { $eq: "Muay Thai" } } },
          { styles_offered: { $elemMatch: { $eq: "BJJ" } } },
        ],
      }),

    // MMA + BJJ
    ...(types &&
      types.includes("mma") &&
      types.includes("bjj") &&
      !types.includes("mt") && {
        $or: [
          { styles_offered: { $elemMatch: { $eq: "MMA" } } },
          { styles_offered: { $elemMatch: { $eq: "BJJ" } } },
        ],
      }),

    // MMA + MT
    ...(types &&
      types.includes("mma") &&
      !types.includes("bjj") &&
      types.includes("mt") && {
        $or: [
          { styles_offered: { $elemMatch: { $eq: "MMA" } } },
          { styles_offered: { $elemMatch: { $eq: "Muay Thai" } } },
        ],
      }),

    // BJJ + MT
    ...(types &&
      !types.includes("mma") &&
      types.includes("bjj") &&
      types.includes("mt") && {
        $or: [
          { styles_offered: { $elemMatch: { $eq: "Muay Thai" } } },
          { styles_offered: { $elemMatch: { $eq: "BJJ" } } },
        ],
      }),

    // JUST MMA
    ...(types &&
      types.includes("mma") &&
      !types.includes("bjj") &&
      !types.includes("mt") && {
        styles_offered: { $elemMatch: { $eq: "MMA" } },
      }),

    // JUST MT
    ...(types &&
      !types.includes("mma") &&
      !types.includes("bjj") &&
      types.includes("mt") && {
        styles_offered: { $elemMatch: { $eq: "Muay Thai" } },
      }),

    // JUST BJJ
    ...(types &&
      !types.includes("mma") &&
      types.includes("bjj") &&
      !types.includes("mt") && {
        styles_offered: { $elemMatch: { $eq: "BJJ" } },
      }),

    isAvailable: { $eq: true },
  };

  return filter;
}
