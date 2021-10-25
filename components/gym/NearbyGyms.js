import Link from "next/link";
import { locationsToString } from "../../utils/location.helpers";
import { getNearbyGyms } from "../../utils/search.helpers";

const NearbyGyms = ({ location }) => {
  const { latitude, longitude, city, country, state, description } = location;
  const nearbyGyms = getNearbyGyms(latitude, longitude);

  return (
    <section className="responsive mb-8">
      <h2 className="dynamicPageHeading">
        Explore more gyms in {locationsToString(city, state, country)}
      </h2>

      <div className="mt-10">
        {nearbyGyms.map((gym) => (
          <Link href={gym.href}>
            <a className="dynamicPageBtn" target={gym.name}>
              {gym.name}
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NearbyGyms;

// TSK
// 1. Create helper function that takes in a location and returns similar resutls
// 2. Have filter butons that call the search page
