import Head from "next/head";
import Layout from "../components/layout/Layout";
import Questions from "../components/minor/questions";

const FAQ = () => {
  return (
    <Layout>
      <Head>
        <title>FAQ | Training Grounds | MMA Gym Finder</title>
        <meta
          name="description"
          content="Find MMA gyms, Martial Art groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA. Search page."
        />
      </Head>
      <Questions />
    </Layout>
  );
};

export default FAQ;
