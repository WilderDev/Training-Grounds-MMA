import Head from "next/head";
import Layout from "../components/layout/Layout";

const Search = () => {
  return (
    <Layout>
      <Head>
        {/* TSK change to the search term */}
        <title>Search | Training Grounds | MMA Gym Finder</title>
        <meta
          name="description"
          content="Find MMA gyms, groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA. Search page."
        />
      </Head>

      <section className="flex">
        <div className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Gyms for groups of 4 Fighters</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Gyms in Mars</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Gym</p>
            <p className="button">Price</p>
            <p className="button">Location</p>
            <p className="button">More Filters</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Search;
