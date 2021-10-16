import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { createParamsFromArray } from "../../utils/array.helpers";
import { pushNewRouterParams } from "../../utils/router.helpers";
import DropdownCheckbox from "./DropdownCheckbox";

const Filters = ({ filters, setFilters }) => {
  const router = useRouter();
  const [trainingModalities, setTrainingModalities] = useState(
    filters.trainingModalities
  );

  const updateTrainingModalities = (styleName) => {
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
