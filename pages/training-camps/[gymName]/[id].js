import Head from "next/head";
import Layout from "../../../components/layout/Layout";
import HeroImageGallery from "../../../components/gym/HeroImageGallery";
import { connectToDatabase } from "../../../utils/mongo.helpers";
import { toSmallKebabCase } from "../../../utils/string.helpers";
import TitleInfoBar from "../../../components/gym/TitleInfoBar";
import GymFeatures from "../../../components/gym/GymFeatures";
import GymDescription from "../../../components/gym/GymDescription";
import MeetTheTrainers from "../../../components/gym/MeetTheTrainers";
import GymAmenities from "../../../components/gym/GymAmenities";
import AvailabilityCalendar from "../../../components/gym/AvailabilityCalendar";
import GymReviews from "../../../components/gym/GymReviews";
import GymSurroundings from "../../../components/gym/GymSurroundings";
import OwnerDetails from "../../../components/gym/OwnerDetails";
import GymDetails from "../../../components/gym/GymDetails";
import NearbyGyms from "../../../components/gym/NearbyGyms";
import BookGymBox from "../../../components/gym/BookGymBox";

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

      <div className="max-w-7xl mx-auto mt-6 space-y-6 sm:px-6 lg:px-8">
        {/*  Title Info Bar*/}
        <TitleInfoBar />

        {/* Image gallery */}
        <HeroImageGallery images={gym.all_images} />

        {/* BelowTheFold Page Content */}
        <div className="flex justify-between">
          {/* Gym Info */}
          <div className="w-2/3  space-y-6">
            {/* Gym Features */}
            <GymFeatures />

            {/* Gym Description */}
            <GymDescription />

            {/* Meet Trainers */}
            <MeetTheTrainers />

            {/* Gym Amenities */}
            <GymAmenities />

            {/* Gym Calendar Availability */}
            <AvailabilityCalendar />
          </div>

          {/* Book Gym */}
          <div className="w-1/3 bg-gray-100">
            <BookGymBox />
          </div>
        </div>

        {/* Reviews */}
        <GymReviews />

        {/* Location Map */}
        <GymSurroundings />

        {/* Owner Details */}
        <OwnerDetails />

        {/* Gym Details */}
        <GymDetails />

        {/* Nearby Gyms */}
        <NearbyGyms />
      </div>
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
