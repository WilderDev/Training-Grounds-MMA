import Head from "next/head";
import Layout from "../../../components/layout/Layout";
import HeroImageGallery from "../../../components/gym/HeroImageGallery";
import { connectToDatabase } from "../../../utils/mongo.helpers";
import { toSmallKebabCase } from "../../../utils/string.helpers";

const SingleGymTemplate = ({ gym }) => {
  console.log("gym:", gym);
  return (
    <Layout isSticky={false}>
      <Head>
        <title>
          {gym.name} | {gym.city}, {gym.country} | Training Grounds | MMA Gym
          Finder
        </title>
        <meta name="description" content={gym.description} />
      </Head>

      {/* Image gallery */}
      <HeroImageGallery images={gym.all_images} />

      {/* Product info */}
    </Layout>
  );
};

export default SingleGymTemplate;

export async function getStaticProps({ params }) {
  const { gymName, id } = params;

  const { db } = await connectToDatabase();
  const res = await db.collection("Active").find({}).toArray();

  const gymInfo = await res.filter(
    (item) =>
      toSmallKebabCase(item.name) === gymName && item._id.toString() === id
  );

  return {
    props: {
      gym: JSON.parse(JSON.stringify(gymInfo[0])),
    },
  };
}

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const res = await db.collection("Active").find({}).toArray();

  const allPaths = await res.map((gym) => ({
    params: {
      gymName: toSmallKebabCase(gym.name),
      id: gym._id.toString(),
    },
  }));

  return {
    paths: allPaths,
    fallback: "blocking",
  };
}
