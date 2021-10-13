// TSK: Pull out location, startDate, endDate, numFighters, type, minPrice, maxPrice,

import { format } from "date-fns";

// saved, minRating, accommodation, isFeatured. Skill level, etc from router.query,
export function formatSearchInfo(queryParams, numSearchResults) {
  console.log("queryParams:", queryParams);
  const { startDate, endDate, numFighters, type, accommodation, location } =
    queryParams;

  let numGymsText =
    numSearchResults === 1 ? "1 Gym" : `${numSearchResults} Gyms`;
  let numFightersText = "1" ? "1 Fighter" : `${numFighters} Fighters`;
  let dateRangeText;
  if (startDate && endDate) {
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    dateRangeText = `${formattedStartDate} - ${formattedEndDate}`;
  }

  const placeholderText = `${(!!location && location) || "Anywhere"} | ${
    (!!type && type.toUpperCase()) || "Training Camps"
  } | ${(!!dateRangeText && dateRangeText) || "Soon"} | ${
    numFightersText && `${numFightersText} Fighters`
  }`;

  const titleText = `${(!!location && location) || "Search"} | ${
    (!!type && type.toUpperCase()) || "Martial Arts"
  } Training Camps | Training Grounds | Training Camp Finder`;

  const smallQueryText = `${numGymsText} Found ~ ${
    (!!location && location) || "Anywhere"
  } ~ ${numFightersText} ~ ${(!!type && type) || "All"}`;

  const queryInfo = {
    formattedNumGyms: numGymsText,
    formattedNumFighters: numFightersText,
    dateRange: dateRangeText,
    placeholder: placeholderText,
    title: titleText,
    smallQuery: smallQueryText,
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
