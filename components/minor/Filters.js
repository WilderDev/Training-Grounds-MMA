import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { createParamsFromArray } from "../../utils/array.helpers";
import { pushNewRouterParams } from "../../utils/router.helpers";
import DropdownCheckbox from "./DropdownCheckbox";

const fightingStyleOptions = [
  {
    name: "MMA",
    id: "mma",
    value: "Mixed Martial Arts",
    description: "Mixed Martial Arts",
    ariaLabelledBy: "filter-gyms_type-checkbox_fighting-style-mma",
  },
  {
    name: "Muay Thai",
    id: "muay-thai",
    value: "Muay Thai",
    description: "Art of 8 Limbs",
    ariaLabelledBy: "filter-gyms_type-checkbox_fighting-style-muay-thai",
  },
  {
    name: "BJJ",
    id: "bjj",
    value: "Brazilian Jiu Jitsu",
    description: "Brazilian Jiu-Jitsu",
    ariaLabelledBy: "filter-gyms_type-checkbox_fighting-style-bjj",
  },
];

const priceRangeOptions = [
  {
    name: "Budget Traveler",
    id: "budget-traveler",
    value: "Low",
    description: "Train like a true spartan",
    ariaLabelledBy: "filter-gyms_type-checkbox_price-range-budget-traveler",
  },
  {
    name: "Modern Warrior",
    id: "modern-warrior",
    value: "Medium",
    description: "Fight and be happy",
    ariaLabelledBy: "filter-gyms_type-checkbox_price-range-modern-warrior",
  },
  {
    name: "Only the Best",
    id: "only-the-best",
    value: "High",
    description: "I am a professional",
    ariaLabelledBy: "filter-gyms_type-checkbox_price-range-only-the-best",
  },
];

// TSK: We gotta abstract these functions and useEffects somehow!

const Filters = ({ filters, setFilters }) => {
  const router = useRouter();
  const [trainingModalities, setTrainingModalities] = useState(
    filters.trainingModalities
  );
  const [priceRange, setPriceRange] = useState(filters.priceRange);

  // Price Range Logic
  const updatePrices = (priceOption) => {
    let updatedArr;

    if (priceRange.includes(priceOption)) {
      updatedArr = priceRange.filter((option) => option !== priceOption);
    } else {
      updatedArr = [...priceRange, priceOption];
    }
    setPriceRange(updatedArr);

    const newParams = createParamsFromArray(updatedArr);
    pushNewRouterParams(updatedArr.length, "priceRange", newParams, router);
  };

  // Training Modalities Logic
  const updateModalities = (styleName) => {
    let updatedArr;

    if (trainingModalities.includes(styleName)) {
      updatedArr = trainingModalities.filter((style) => style !== styleName);
    } else {
      updatedArr = [...trainingModalities, styleName];
    }
    setTrainingModalities(updatedArr);

    const newParams = createParamsFromArray(updatedArr);
    pushNewRouterParams(updatedArr.length, "fightingStyles", newParams, router);
  };

  // Training Modalities useEffect
  useEffect(() => {
    setFilters({
      ...filters,
      trainingModalities,
    });
  }, [trainingModalities]);

  // Price Range Use Effect
  useEffect(() => {
    setFilters({
      ...filters,
      priceRange,
    });
  }, [priceRange]);

  return (
    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
      {/* Fighting Styles */}
      <DropdownCheckbox
        filterOptions={fightingStyleOptions}
        selectedOptions={trainingModalities}
        updateOptions={updateModalities}
        title="Fighting Styles"
      />

      {/* Price Range */}
      <DropdownCheckbox
        filterOptions={priceRangeOptions}
        selectedOptions={priceRange}
        updateOptions={updatePrices}
        title="Price"
      />

      <p className="button">Location</p>
      <p className="button">Skill Level</p>
      {/* <p className="button">Accommodation</p> */}
      <p className="button">More Filters</p>
    </div>
  );
};

export default Filters;
