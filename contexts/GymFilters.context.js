// FightingStyles, Pricing, Skill Level, Accommodation, NumFighters ETC
import { createContext, useContext, useMemo, useState } from "react";

const GymFilters = createContext();

function GymFiltersProvider({ children }) {
  const [fightingStyles, setFightingStyles] = useState();
  //   TSK this should be a range input
  const [priceRange, setPriceRange] = useState();
  const [skillLevel, setSkillLevel] = useState();
  const [accommodationPref, setAccommodationPref] = useState();

  const value = useMemo(() => ({
    fightingStyles,
    setFightingStyles,
    priceRange,
    setPriceRange,
    skillLevel,
    setSkillLevel,
    accommodationPref,
    setAccommodationPref,
  }));

  return <GymFilters.Provider value={value}>{children}</GymFilters.Provider>;
}

function useGymFilters() {
  const ctx = useContext(GymFilters);

  if (ctx === undefined)
    throw new Error("useGymFilters must be used with a GymFiltersProvider");

  return ctx;
}

export { GymFiltersProvider, useGymFilters };

// IX_TSK
// 1. When you add more filters. . . Make sure to add them here! 	// isFeatured, isNew, amenitites, rating . . .
// 2, Does this need to be global?
