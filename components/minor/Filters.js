import { useState, useEffect } from "react";
import DropdownCheckbox from "./DropdownCheckbox";

const Filters = ({ filters, setFilters }) => {
  const [gymTypes, setGymTypes] = useState(() => ({
    MMA: false,
    MuayThai: false,
    BJJ: false,
  }));

  useEffect(() => {
    const gymFilters = [];
    for (let key in gymTypes) {
      if (gymTypes[key] === true) {
        gymFilters.push(key);
      }
    }

    if (gymFilters.length === 0) {
      setFilters({
        ...filters,
        gymFilters: null,
      });
    } else {
      setFilters({
        ...filters,
        gymFilters,
      });
    }
  }, [gymTypes]);

  return (
    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
      {/* Type of Gym */}
      <DropdownCheckbox
        selectedGymTypes={gymTypes}
        setSelectedGymTypes={setGymTypes}
      />

      <p className="button">Price</p>
      <p className="button">Location</p>
      <p className="button">Skill Level</p>
      {/* <p className="button">Accommodation</p> */}
      <p className="button">More Filters</p>
    </div>
  );
};

export default Filters;
