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
import { createArrayFromMultipleParams } from "../../utils/array.helpers";

const LocationSearch = ({ searchResults }) => {
  // Router Query
  const router = useRouter();
  const { location, fightingStyles, priceRange, skillLevels, numFighters } =
    router.query;
  // TSK:    location: GEOLOCATION array? + Radius // Country // City

  // Create arrays from query params
  const fightingStylesArr = createArrayFromMultipleParams(fightingStyles);
  const priceRangeArr = createArrayFromMultipleParams(priceRange);
  const skillLevelsArr = createArrayFromMultipleParams(skillLevels);

  // Search Results
  const [filteredGyms, setFilteredGyms] = useState(searchResults);

  // Clear Filters
  const clearFilters = () => {
    setAllFilters({
      filters: [],
      location,
      numFighters,
    });
    router.query = {
      location: location,
      numFighters: numFighters,
    };
    router.push(router);
  };

  // Filters for Searches
  const [allFilters, setAllFilters] = useState({
    trainingModalities: fightingStylesArr,
    priceRange: priceRangeArr,
    skillLevels: skillLevelsArr,
  });

  // Screen Content State
  const [placeholder, setPlaceholder] = useState("");
  const [title, setTitle] = useState("");
  const [smallQuery, setSmallQuery] = useState("");
  const [heading, setHeading] = useState("");

  // Get Placeholder Data Content
  useEffect(() => {
    let { placeholder, title, smallQuery, heading } = formatSearchInfo(
      router.query,
      filteredGyms.length
    );
    setPlaceholder(placeholder);
    setTitle(title);
    setSmallQuery(smallQuery);
    setHeading(heading);
  }, [router.query, filteredGyms.length]);

  // Get New Search Results Based on Filters
  useEffect(() => {
    async function fetchData() {
      const res = await sender("/api/search-results", {
        filters: allFilters,
        location,
        numFighters: +numFighters,
      });

      if (res && res.message === "Success!") {
        setFilteredGyms(res.filterResults);
      }
    }
    fetchData();
  }, [allFilters, location]);

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
          <h1 className="text-3xl font-semibold mt-2 mb-6">{heading}</h1>

          {/* Filters */}
          <Filters
            filters={allFilters}
            setFilters={setAllFilters}
            clearFilters={clearFilters}
          />

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
