import { format } from "date-fns";
import { toTitleCase, toTitleCases } from "./string.helpers";

// TSK: Pull out  minPrice, maxPrice, saved, minRating, accommodation, isFeatured. . .
export function formatSearchInfo(queryParams, numSearchResults) {
  console.log("queryParams:", queryParams);
  const { startDate, endDate, numFighters, type, location } = queryParams;

  let numGymsText =
    numSearchResults === 1 ? "1 Gym" : `${numSearchResults} Gyms`;
  let numFightersText = "1" ? "1 Fighter" : `${numFighters} Fighters`;
  let dateRangeText;
  if (startDate && endDate) {
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    dateRangeText = `${formattedStartDate} - ${formattedEndDate}`;
  }

  const placeholderText = `${
    (!!location && toTitleCases(location)) || "Anywhere"
  } | ${(!!type && toTitleCase(type)) || "Training Camps"} | ${
    (!!dateRangeText && dateRangeText) || "Soon"
  } | ${numFightersText && `${numFightersText} Fighters`}`;

  const titleText = `${(!!location && location) || "Search"} | ${
    (!!type && toTitleCase(type)) || "Martial Arts"
  } Training Camps | Training Grounds | Training Camp Finder`;

  const smallQueryText = `${numGymsText} Found ~ ${
    (!!location && toTitleCases(location)) || "Anywhere"
  } ~ ${numFightersText}`;

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

// * FILTERS * \\
export function filterResults() {}

// * SORTS * \\
export function sortResults() {}
