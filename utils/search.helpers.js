// TSK: Pull out location, startDate, endDate, numFighters, type, minPrice, maxPrice,
// saved, minRating, accommodation, isFeatured. Skill level, etc from router.query,
export function formatSearchInfo(queryParams, numSearchResults) {
  console.log("queryParams:", queryParams);
  const { startDate, endDate, numFighters, type, accommodation } = queryParams;

  let numGymsText =
    numSearchResults === 1 ? "1 Gym" : `${numSearchResults} Gyms`;
  let numFightersText = "1" ? "1 Fighter" : `${numFighters} Fighters`;
  let dateRangeText;
  if (startDate && endDate) {
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    dateRangeText = `${formattedStartDate} - ${formattedEndDate}`;
  }

  const placeholderText = null;
  const titleText = null;

  //   placeholder={`${(hasLocation && location) || "Anywhere"} | ${
  //         (hasType && type) || "Training Camps"
  //       } | ${(dateRange && dateRange) || "Soon"} | ${
  //         formattedNumFighters && `${formattedNumFighters} Fighters`
  //       }`}

  // Title
  // {hasLocation && location} | {hasType && type} Training Camps |
  //           Training Grounds | Training Camp Finder

  const queryInfo = {
    formattedNumGyms: numGymsText,
    formattedNumFighters: numFightersText,
    dateRange: dateRangeText,
    placeholder: placeholderText,
    title: titleText,
  };

  return queryInfo;
}

export function getQueryBooleans(queryParams) {
  const { type, location, startDate, endDate } = queryParams;
  const routerBooleans = {
    hasType: !!type,
    hasLocation: !!location,
    hasStartDate: !!startDate,
    hasEndDate: !!endDate,
  };

  return routerBooleans;
}

// * FILTERS * \\
export function filterResults() {}

// * SORTS * \\
export function sortResults() {}
