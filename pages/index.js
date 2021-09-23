import Head from "next/head";
import Hero from "../components/home/Hero";
import LocationGrid from "../components/home/LocationGrid";
import Layout from "../components/layout/Layout";
import { fetcher } from "../utils/http.helpers";

export default function Home({ locationGridData }) {
  return (
    <Layout>
      <Head>
        <title>Training Grounds | MMA Gym Finder</title>
        <meta
          name="description"
          content="Find MMA gyms, groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <LocationGrid data={locationGridData} />
    </Layout>
  );
}

export async function getStaticProps() {
  {
    /* TSK: Look for Martial Arts API's */
  }
  const locationGridData = await fetcher("https://links.papareact.com/pyp");

  return {
    props: {
      locationGridData,
    },
  };
}
