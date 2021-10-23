import { locationsToString } from "../../utils/location.helpers";
import SurroundingsMap from "../map/SurroundingsMap";

const GymSurroundings = ({ location, name }) => {
  const { latitude, longitude, city, country, state, description } = location;

  return (
    <section className="responsive">
      {/* Title */}
      <h2 className="dynamicPageHeading mb-2">Around the area</h2>
      <p className="text-gray-700 text-sm mb-6">
        {locationsToString(city, state, country)}
      </p>

      {/* Map */}
      <div className="hidden w-full xl:inline-flex h-[500px]">
        <SurroundingsMap
          latitude={latitude}
          longitude={longitude}
          name={name}
        />
      </div>

      {/* Description of surroundings */}
      <h3 className=""></h3>
      <p className=""></p>
      <hr className="spacedHR" />
    </section>
  );
};

export default GymSurroundings;

// TSK
// 1. Create location.helper function that takes in a location and returns nearby popular things
