import Head from "next/head";
import AltLayout from "../components/layout/AltLayout";
import GymPromoHero from "../components/gyms/GymPromoHero";

const GymOwnersJoinUs = () => {
  return (
    <AltLayout>
      <Head>
        <title>
          Add Your Gym or Training Camp | Training Grounds | MMA Gym Finder
        </title>
        <meta
          name="description"
          content="Find MMA training camps, gyms, martial art groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA. Search page."
        />
      </Head>

      <GymPromoHero />
    </AltLayout>
  );
};

export default GymOwnersJoinUs;
