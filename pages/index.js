import Head from "next/head";
import CategoryCards from "../components/home/CategoryCards";
import CTABox from "../components/home/CTABox";
import Hero from "../components/home/Hero";
import LocationGrid from "../components/home/LocationGrid";
import Layout from "../components/layout/Layout";
import { getAllCategories } from "../utils/category.helpers";
import { getAllLocations } from "../utils/location.helpers";

export default function Home({ locationGridData, categoryCardsData }) {
  return (
    <Layout>
      <Head>
        <title>Training Grounds | MMA Gym Finder</title>
        <meta
          name="description"
          content="Find MMA gyms, groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA."
        />
      </Head>

      <div className="px-4 sm:px-8">
        <Hero />

        <LocationGrid data={locationGridData} />

        <CategoryCards data={categoryCardsData} />

        <CTABox
          image="/images/hero-bg-alt.jpg"
          title="Put Your Gym on the Map"
          description="Attract top talent to your gym and grow your members by sharing your gym."
          buttonText="Learn More"
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const locationGridData = getAllLocations();
  const categoryCardsData = getAllCategories();

  return {
    props: {
      locationGridData,
      categoryCardsData,
    },
  };
}
