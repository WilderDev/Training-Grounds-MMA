import Head from "next/head";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Layout from "../../components/layout/Layout";
import GymInfoCard from "../../components/gyms/GymInfoCard";
import { v4 } from "uuid";
import Map from "../../components/map/Map";
import { getAllActiveGymsByQuery } from "../../data/gyms.db";

const LocationSearch = ({ searchResults }) => {
  const router = useRouter();
  // TSK:Use these for filters and sorts
  const {
    location,
    startDate,
    endDate,
    numFighters,
    type,
    minPrice,
    maxPrice,
    saved,
    minRating,
    accommodation,
    isFeatured,
  } = router.query;
  // const lengthOfStay = TSK
  // Skill level

  console.log("searchResults:", searchResults);

  const formattedNumGyms =
    searchResults.length === 1 ? "1 Gym" : `${searchResults.length} Gyms`;
  const formattedNumFighters =
    numFighters === "1" ? "1 Fighter" : `${numFighters} Fighters`;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <Layout
      placeholder={`${location && location} | ${type && type} | ${
        dateRange && dateRange
      } | ${formattedNumFighters && `${formattedNumFighters} Fighters`}`}
    >
      <Head>
        <title>
          {location && location} | {type && type} Training Camps | Training
          Grounds | Training Camp Finder
        </title>
        <meta
          name="description"
          content="Find MMA gyms, groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA. Search page."
        />
      </Head>

      <section className="flex mb-24">
        {/* Left side - Title && Cards */}
        <div className="flex-grow pt-14 px-6">
          {/* Top Info (Title) */}
          <p className="text-xs">
            {formattedNumGyms} {location && `~ ${location}`}{" "}
            {numFighters && `~ ${formattedNumFighters}`} {type && `~ ${type}`}{" "}
            {accommodation && `${accommodation} ~`}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            {type && type} Gyms {location && `in ${location}`}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {/* TSK: These should filter the searchResults */}
            <p className="button">Accommodation</p>
            <p className="button">Type of Gym</p>
            <p className="button">Price</p>
            <p className="button">Location</p>
            <p className="button">More Filters</p>
          </div>

          {/* Results (Cards) */}
          <div className="flex flex-col">
            {/* {searchResults?.map((gym) => (
              <GymInfoCard key={v4()} info={gym} />
            ))} */}
          </div>
        </div>

        {/* Right Side - Map */}
        {location && (
          <div className="hidden xl:inline-flex xl:min-w-[600px] max-h-[90vh] sticky top-24">
            {/* <Map searchResults={searchResults} /> */}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default LocationSearch;

export async function getServerSideProps({ query }) {
  const searchResults = await getAllActiveGymsByQuery(query);

  return {
    props: {
      searchResults,
    },
  };
}
