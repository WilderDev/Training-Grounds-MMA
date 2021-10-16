import { useState, useEffect } from "react";
import DropdownCheckbox from "./DropdownCheckbox";

const Filters = ({ filters, setFilters }) => {
  const [trainingModalities, setTrainingModalities] = useState([]);

  const updateTrainingModalities = (styleName) => {
    if (trainingModalities.includes(styleName)) {
      const newArr = trainingModalities.filter((style) => style !== styleName);
      setTrainingModalities(newArr);
    } else {
      setTrainingModalities([...trainingModalities, styleName]);
    }
  };

  useEffect(() => {
    setFilters({
      ...filters,
      trainingModalities,
    });
  }, [trainingModalities]);

  return (
    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
      {/* Type of Gym */}
      <DropdownCheckbox
        trainingModalities={trainingModalities}
        updateModalities={updateTrainingModalities}
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
