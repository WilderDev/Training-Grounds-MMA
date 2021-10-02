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
      <h1>Search</h1>
    </Layout>
  );
};

export default Search;
