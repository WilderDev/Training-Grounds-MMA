import { useState } from "react";
import { v4 } from "uuid";
import { getMatchingAmenityIcon } from "../../utils/icon.helpers";

const GymAmenities = ({ amenities }) => {
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const amenitiesWithIcons = amenities.map((item) => {
    const icon = getMatchingAmenityIcon(item.icon);
    return {
      ...item,
      icon,
    };
  });
  return (
    <section className="responsive">
      <h2 className="dynamicPageHeading mb-6">Gym Ammenities</h2>
      <ul className="space-y-3">
        {amenitiesWithIcons.slice(0, 4).map((item) => (
          <li key={v4()} className="flex items-center">
            <item.icon className="h-5 sm:h-7 text-gray-600 pr-5" />
            <p className="">{item.name}</p>
          </li>
        ))}
        {showAllAmenities &&
          amenitiesWithIcons.slice(4, amenities.length).map((item) => (
            <li key={v4()} className="flex items-center">
              <item.icon className="h-5 sm:h-7 text-gray-600 pr-5" />
              <p className="">{item.name}</p>
            </li>
          ))}
      </ul>
      <button
        onClick={() => setShowAllAmenities(!showAllAmenities)}
        className="border border-gray-700 rounded-lg mt-6 px-6 py-2 shadow hover:bg-gray-100 hover:shadow-lg transition-all"
      >
        {showAllAmenities ? "Hide" : `Show all ${amenities.length} amenities`}
      </button>

      <hr className="spacedHR" />
    </section>
  );
};

export default GymAmenities;

// IX_TSK
// 1. The button should open up a modal with seperated amenities
// 2. Show/Hide transition
