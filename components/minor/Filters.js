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

const Filters = ({ filters, setFilters, clearFilters }) => {
  const router = useRouter();
  const [trainingModalities, setTrainingModalities] = useState(
    filters.trainingModalities
  );
  const [priceRange, setPriceRange] = useState(filters.priceRange);

  const onClearFilters = () => {
    setTrainingModalities([]);
    setPriceRange([]);
    clearFilters();
  };

  // Update Filters
  const updateFilters = (option, filterArr, setFilterArr, paramName) => {
    let updatedArr;

    if (filterArr.includes(option)) {
      updatedArr = filterArr.filter((opt) => opt !== option);
    } else {
      updatedArr = [...filterArr, option];
    }
    setFilterArr(updatedArr);

    const newParams = createParamsFromArray(updatedArr);
    pushNewRouterParams(updatedArr.length, paramName, newParams, router);
  };

  // Refresh Filters
  useEffect(() => {
    setFilters({
      ...filters,
      trainingModalities: trainingModalities,
      priceRange: priceRange,
    });
  }, [trainingModalities, priceRange]);

  return (
    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
      {/* Fighting Styles */}
      <DropdownCheckbox
        filterOptions={fightingStyleOptions}
        selectedOptions={trainingModalities}
        setSelectedOptions={setTrainingModalities}
        updateOptions={updateFilters}
        title="Fighting Styles"
        param="fightingStyles"
      />

      {/* Price Range */}
      <DropdownCheckbox
        filterOptions={priceRangeOptions}
        selectedOptions={priceRange}
        setSelectedOptions={setPriceRange}
        updateOptions={updateFilters}
        title="Price"
        param="priceRange"
      />

      <p className="button">Skill Level</p>
      <p className="button">Accommodation</p>

      {/* TSK: Add More Filters after MVP */}
      {/* <p className="button">More Filters</p> */}

      <button className="text-xs text-gray-500 pl-3" onClick={onClearFilters}>
        Clear
      </button>
    </div>
  );
};

export default Filters;
