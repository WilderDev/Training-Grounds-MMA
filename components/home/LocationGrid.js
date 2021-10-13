import { v4 } from "uuid";
import LocationGridItem from "./LocationGridItem";

const LocationGrid = ({ data }) => {
  return (
    <section>
      <h2 className="text-4xl font-semibold pb-5 pt-6">Explore the World</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((location) => (
          <LocationGridItem location={location} key={v4()} />
        ))}
      </div>
    </section>
  );
};

export default LocationGrid;
