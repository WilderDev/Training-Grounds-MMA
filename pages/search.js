import Head from "next/head";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Layout from "../components/layout/Layout";
import { fetcher } from "../utils/http.helpers";
import { getAllGyms } from "../utils/gym-data.helpers";
import GymInfoCard from "../components/gyms/GymInfoCard";
import { v4 } from "uuid";
import Map from "../components/map/Map";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, numFighters } = router.query;
  const formattedNumFighters =
    numFighters === "1" ? "1 Fighter" : `${numFighters} Fighters`;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <Layout placeholder={`${location} | ${range} | ${formattedNumFighters}`}>
      <Head>
        {/* TSK change to the search term */}
        <title>
          {location} Training Camps | Training Grounds | MMA Gym Finder
        </title>
        <meta
          name="description"
          content="Find MMA gyms, groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA. Search page."
        />
      </Head>

      <section className="flex">
        <div className="flex-grow pt-14 px-6">
          {/* TOP */}
          <p className="text-xs">
            300+ Gyms ~ {range} ~{formattedNumFighters}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Gyms in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Gym</p>
            <p className="button">Price</p>
            <p className="button">Location</p>
            <p className="button">More Filters</p>
          </div>

          {/* RESULTS */}
          <div className="flex flex-col">
            {searchResults.map(
              ({
                title,
                description,
                img,
                location,
                lat,
                long,
                price,
                total,
                star,
              }) => (
                <GymInfoCard
                  key={v4()}
                  title={title}
                  desc={description}
                  img={img}
                  location={location}
                  lat={lat}
                  long={long}
                  price={price}
                  total={total}
                  star={star}
                />
              )
            )}
          </div>
        </div>
      </section>

      <section className="hidden xl:inline-flex">
        <Map />
      </section>
    </Layout>
  );
};

export default Search;

export async function getServerSideProps({ params }) {
  //   TSK: const searchResults = await fetcher("someMongoDB Dtabase");
  const searchResults = getAllGyms();

  return {
    props: {
      searchResults,
    },
  };
}
