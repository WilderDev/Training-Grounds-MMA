import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import GymInfoCard from "../../components/gyms/GymInfoCard";
import { v4 } from "uuid";
import Map from "../../components/map/Map";
import { getAllActiveGymsByQuery } from "../../data/gyms.db";
import { formatSearchInfo } from "../../utils/search.helpers";
import { toTitleCase, toTitleCases } from "../../utils/string.helpers";
import Filters from "../../components/minor/Filters";
import { sender } from "../../utils/http.helpers";

const LocationSearch = ({ searchResults }) => {
  // Router Query
  const router = useRouter();
  const { location, type } = router.query;

  // Search Results
  const [filteredGyms, setFilteredGyms] = useState(searchResults);

  // Filters for Searches
  //  * Object will look like:
  //  {
  //    trainingModalities: ["MMA"],
  //    prices: { min: 100, max: 200 }
  //    location: GEOLOCATION array? + Radius // Country // City (TSK)
  //   skillLevels: ["Beginner", "Professional"]
  //   numFighters: 1
  //    datesRequried: { start: new Date(), end: new Date() + 10 }
  //   ...
  // }
  const [allFilters, setAllFilters] = useState({
    trainingModalities: [],
    // . . .
  });

  // Screen Content State
  const [placeholder, setPlaceholder] = useState("");
  const [title, setTitle] = useState("");
  const [smallQuery, setSmallQuery] = useState("");

  // Get Placeholder Data Content
  useEffect(() => {
    let { placeholder, title, smallQuery } = formatSearchInfo(
      router.query,
      filteredGyms.length
    );
    setPlaceholder(placeholder);
    setTitle(title);
    setSmallQuery(smallQuery);
  }, [router.query, filteredGyms.length]);

  // Get New Search Results Based on Filters
  useEffect(() => {
    async function fetchData() {
      const res = await sender("/api/search-results", {
        filters: allFilters,
      });

      if (res && res.message === "Success!") {
        setFilteredGyms(res.filterResults);
      }
    }
    fetchData();
  }, [allFilters]);

  return (
    <Layout placeholder={placeholder}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Find MMA gyms, groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA. Search page."
        />
      </Head>

      <section className="flex mb-24">
        {/* Left side - Title && Cards */}
        <div className="flex-grow mx-auto md:mx-0 pt-14 md:px-6">
          {/* Top Info (Title) */}
          <p className="text-xs">{smallQuery}</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            {type && toTitleCase(type)} Gyms{" "}
            {location && `in ${toTitleCases(location)}`}
          </h1>

          {/* Filters */}
          <Filters filters={allFilters} setFilters={setAllFilters} />

          {/* Results (Cards) */}
          <div className="flex flex-col">
            {filteredGyms?.length > 0 ? (
              filteredGyms.map((gym) => <GymInfoCard key={v4()} info={gym} />)
            ) : (
              <p>No camps found matching that description.</p>
            )}
          </div>
        </div>

        {/* Right Side - Map */}
        {filteredGyms.length && (
          <div className="hidden xl:inline-flex xl:min-w-[600px] max-h-[90vh] sticky top-24">
            <Map searchResults={filteredGyms} />
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
