import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import GymInfoCard from "../../components/gyms/GymInfoCard";
import { v4 } from "uuid";
import Map from "../../components/map/Map";
import { getAllActiveGymsByQuery } from "../../data/gyms.db";
import { formatSearchInfo } from "../../utils/search.helpers";

const LocationSearch = ({ searchResults }) => {
  const router = useRouter();

  console.log("searchResults:", searchResults);
  const { location, type } = router.query;
  const [placeholder, setPlaceholder] = useState("");
  const [title, setTitle] = useState("");
  const [smallQuery, setSmallQuery] = useState("");

  useEffect(() => {
    let { placeholder, title, smallQuery } = formatSearchInfo(
      router.query,
      searchResults.length
    );
    setPlaceholder(placeholder);
    setTitle(title);
    setSmallQuery(smallQuery);
  }, [router.query]);

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
            {type && type.toUpperCase()} Gyms {location && `in ${location}`}
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
            {searchResults?.length > 0 ? (
              searchResults.map((gym) => <GymInfoCard key={v4()} info={gym} />)
            ) : (
              <p>No camps found matching that description.</p>
            )}
          </div>
        </div>

        {/* Right Side - Map */}
        {searchResults.length && (
          <div className="hidden xl:inline-flex xl:min-w-[600px] max-h-[90vh] sticky top-24">
            <Map searchResults={searchResults} />
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
