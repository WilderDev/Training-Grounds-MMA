import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";

const AddGym = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default AddGym;
