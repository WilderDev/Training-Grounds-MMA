import allGyms from "../data/gyms.db.json";

export function getAllGyms() {
  return allGyms.slice();
}

// !========! \\
// * FILTERS * \\
// !========! \\
// ~View Gyms by PRICE~
export function filterByPrice(listOfGyms, minPrice, maxPrice) {}

// ~View Gyms by LOCATION~
export function filterByLocation(listOfGyms, location, radius) {}

// ~View Gyms by ACCOMMODATION~
export function filterByAccommodation(listOfGyms, typeOfAccommodation) {}

// ~View Gyms by RATING~
export function filterByRating(listOfGyms, minRating) {}

// ~View Gyms by FEATURED~
export function filterByFeatured(listOfGyms) {}

// ~View Gyms by NUMBER-OF-FIGHTERS~
export function filterByNumOfFighters(listOfGyms, numOfFighters) {}

// !========! \\
// * SORTS * \\
// !========! \\
// ~Find CHEAPEST Gyms~
export function sortByPrice(listOfGyms, sortBy) {}

// ~Find CLOSEST Gyms~
export function sortByLocation(listOfGyms, sortBy) {}

// ~Find BEST-RATED Gyms~
export function sortByRating(listOfGyms, sortBy) {}
