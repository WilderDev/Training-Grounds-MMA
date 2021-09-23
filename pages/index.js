import Head from "next/head";
import CategoryCards from "../components/home/CategoryCards";
import CTABox from "../components/home/CTABox";
import Hero from "../components/home/Hero";
import LocationGrid from "../components/home/LocationGrid";
import Layout from "../components/layout/Layout";
import { fetcher } from "../utils/http.helpers";

export default function Home({ locationGridData, categoryCardsData }) {
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

      <CategoryCards data={categoryCardsData} />

      <CTABox
        image="/images/hero-bg-alt.jpg"
        title="Put Your Gym on the Map"
        description="Attract top talent to your gym and grow your members by sharing your gym."
        buttonText="Learn More"
      />
    </Layout>
  );
}

export async function getStaticProps() {
  {
    /* TSK: Look for Martial Arts API's */
  }
  const locationGridData = await fetcher("https://links.papareact.com/pyp");
  const categoryCardsData = await fetcher("https://links.papareact.com/zp1");

  return {
    props: {
      locationGridData,
      categoryCardsData,
    },
  };
}
