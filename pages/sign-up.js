import Head from "next/head";
import Layout from "../components/layout/Layout";
import Auth from "../components/minor/authentication";

const SignUp = () => {
  const handleSignUp = (method) => {
    console.log("method:", method);
  };

  return (
    <Layout>
      <Head>
        <title>Sign up | Training Grounds | MMA Gym Finder</title>
        <meta
          name="description"
          content="Find MMA training camps, gyms, martial art groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA. Search page."
        />
      </Head>

      <Auth type="sign-up" onSignUp={handleSignUp} />
    </Layout>
  );
};

export default SignUp;
