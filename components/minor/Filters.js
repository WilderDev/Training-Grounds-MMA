import DropdownCheckbox from "./DropdownCheckbox";

const Filters = () => {
  return (
    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
      {/* TSK: These should filter the searchResults */}

      {/* Type of Gym */}
      <DropdownCheckbox />

      <p className="button">Price</p>
      <p className="button">Location</p>
      <p className="button">Skill Level</p>
      {/* <p className="button">Accommodation</p> */}
      <p className="button">More Filters</p>
    </div>
  );
};

export default Filters;
