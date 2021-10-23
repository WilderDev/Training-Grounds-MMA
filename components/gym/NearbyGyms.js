import { locationsToString } from "../../utils/location.helpers";

const NearbyGyms = ({ location }) => {
  const { latitude, longitude, city, country, state, description } = location;

  return (
    <section className="responsive">
      <h2 className="dynamicPageHeading">
        Explore more gyms in {locationsToString(city, state, country)}
      </h2>
      List of all nearby gyms by city... probably create another component for
      by trainingModality
      <hr className="spacedHR" />
    </section>
  );
};

export default NearbyGyms;

// TSK
// 1. Create helper function that takes in a location and returns similar resutls
