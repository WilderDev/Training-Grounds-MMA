import { format } from "date-fns";
import { toTitleCase, toTitleCases } from "./string.helpers";

// TSK: Pull out  minPrice, maxPrice, saved, minRating, accommodation, isFeatured. . .
export function formatSearchInfo(queryParams, numSearchResults) {
  const { startDate, endDate, numFighters, fightingStyles, location } =
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

  const placeholderText = `${
    (!!location && toTitleCases(location)) || "Anywhere"
  } | ${
    (!!fightingStyles && toTitleCases(fightingStyles)) || "Training Camps"
  } | ${(!!dateRangeText && dateRangeText) || "Soon"} | ${
    numFightersText && `${numFightersText} Fighters`
  }`;

  const titleText = `${(!!location && toTitleCases(location)) || "Search"} | ${
    (!!fightingStyles && toTitleCases(fightingStyles)) || "Martial Arts"
  } Training Camps | Training Grounds | Training Camp Finder`;

  const smallQueryText = `${numGymsText} Found ~ ${
    (!!location && toTitleCases(location)) || "Anywhere"
  } ~ ${numFightersText}`;

  let gymHeading;
  if (fightingStyles) {
    gymHeading =
      fightingStyles.split(",").length < 2
        ? `${toTitleCases(fightingStyles)} Camps`
        : "Training Camps By Styles";
  } else {
    gymHeading = "Training Camps";
  }
  const headingText = location
    ? `${gymHeading} in ${toTitleCases(location)}`
    : gymHeading;

  const queryInfo = {
    formattedNumGyms: numGymsText,
    formattedNumFighters: numFightersText,
    dateRange: dateRangeText,
    placeholder: placeholderText,
    title: titleText,
    smallQuery: smallQueryText,
    heading: headingText,
  };

  return queryInfo;
}

export function getNearbyGyms(latitude, longitude) {
  let nearbyGyms = [
    {
      name: "Bankok Training Camps",
      href: "http://localhost:3000/search?location=bankok&numFighters=1",
    },
  ];

  // IX_TSK: Create this function

  return nearbyGyms;
}
