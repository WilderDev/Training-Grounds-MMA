import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AltLayout from "../components/layout/AltLayout";

const AddGym = () => {
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

      <section>
        <h1>Add Your Gym</h1>
      </section>
    </AltLayout>
  );
};

export default AddGym;
