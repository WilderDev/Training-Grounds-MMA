import Head from "next/head";
import Layout from "../components/layout/Layout";
import Auth from "../components/minor/authentication";

const SignIn = () => {
  return (
    <Layout>
      <Head>
        <title>Sign in | Training Grounds | MMA Gym Finder</title>
        <meta
          name="description"
          content="Find MMA training camps, gyms, martial art groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA. Search page."
        />
      </Head>

      <Auth type="sign-in" />
    </Layout>
  );
};

export default SignIn;
