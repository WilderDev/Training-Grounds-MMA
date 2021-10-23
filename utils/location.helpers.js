import allLocations from "../data/locations.db.json";

export function getAllLocations() {
  return allLocations;
}

export function locationsToString(city, state, country) {
  let formattedLocationString = "";

  if (!state) {
    formattedLocationString = `${city}, ${country}`;
  } else {
    formattedLocationString = `${city}, ${state}`;
  }

  return formattedLocationString;
}
