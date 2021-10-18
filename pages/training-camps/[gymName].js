import Head from "next/head";
import Layout from "../../components/layout/Layout";

const SingleGymTemplate = () => {
  return (
    <Layout isSticky={false}>
      <Head>
        <title>Training Grounds | MMA Gym Finder</title>
        <meta
          name="description"
          content="Find MMA gyms, groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA."
        />
      </Head>
      <h1>Test</h1>
    </Layout>
  );
};

export default SingleGymTemplate;
