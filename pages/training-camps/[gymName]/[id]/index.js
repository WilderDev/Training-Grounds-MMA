import Head from "next/head";
import Layout from "../../../../components/layout/Layout";
import HeroImageGallery from "../../../../components/gym/HeroImageGallery";
import { connectToDatabase } from "../../../../utils/mongo.helpers";
import { toSmallKebabCase } from "../../../../utils/string.helpers";
import TitleInfoBar from "../../../../components/gym/TitleInfoBar";
import GymFeatures from "../../../../components/gym/GymFeatures";
import GymDescription from "../../../../components/gym/GymDescription";
import MeetTheTrainers from "../../../../components/gym/MeetTheTrainers";
import GymAmenities from "../../../../components/gym/GymAmenities";
import GymReviews from "../../../../components/gym/GymReviews";
import OwnerDetails from "../../../../components/gym/OwnerDetails";
import GymDetails from "../../../../components/gym/GymDetails";
import NearbyGyms from "../../../../components/gym/NearbyGyms";
import BookGymBox from "../../../../components/gym/BookGymBox";

const SingleGymTemplate = ({ gym }) => {
  const {
    name,
    title,
    description,
    location,
    main_image_url,
    features,
    amenities,
    rating,
    reviews,
    skill_levels,
    styles_offered,
    is_featured,
    is_available,
    all_images,
    pricing,
    currently_enrolled,
    max_capacity,
    open_spaces,
    max_length_stay,
    gear,
    schedule,
    gym_owner,
    trainers,
    contact_info,
    gym_policies,
  } = gym;

  return (
    <Layout isSticky={false}>
      <Head>
        <title>
          {name} | {location.city}, {location.country} | Training Grounds | MMA
          Gym Finder
        </title>
        <meta name="description" content={description} />
      </Head>

      <div className="relative w-screen sm:max-w-7xl mx-auto lg:mt-7  sm:px-6 lg:px-8">
        {/* AboveTheFold Page Content */}
        <div className="space-y-4">
          {/*  Title Info Bar*/}
          <TitleInfoBar
            title={title}
            rating={rating}
            numReviews={reviews.length}
            location={location}
          />

          {/* Image gallery */}
          <HeroImageGallery
            mainImage={main_image_url}
            images={all_images}
            name={name}
          />
        </div>

        {/* BelowTheFold Page Content */}
        <div className="flex flex-col sm:flex-row justify-between">
          {/* Gym Info */}
          <div className="w-full sm:w-2/3  space-y-6">
            {/* Gym Features */}
            <GymFeatures
              name={name}
              features={features}
              stylesOffered={styles_offered}
            />

            {/* Gym Description */}
            <GymDescription
              desc={description}
              detailedDesc={
                "Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque malesuada montes, volutpat augue nisi morbi viverra habitasse purus dictumst condimentum, senectus cubilia hac ornare taciti eget neque posuere suscipit. Pellentesque donec porttitor imperdiet sodales habitant curae non hendrerit enim libero, bibendum aliquam litora suspendisse lectus malesuada rhoncus integer interdum lacinia nunc, ad magna elementum laoreet nullam nulla vivamus nisi nam. Vivamus montes etiam lacus himenaeos aptent, eleifend vulputate a posuere vehicula cum, parturient mus netus diam."
              }
            />

            {/* Meet Trainers */}
            <MeetTheTrainers trainers={trainers} />

            {/* Gym Amenities */}
            <GymAmenities amenities={amenities} />

            {/* Gym Calendar Availability */}
            {/* <AvailabilityCalendar
              city={location.city}
              country={location.country}
              state={location.state}
            /> */}
          </div>

          {/* Book Gym */}
          <div className="relative w-screen sm:static sm:w-1/3 sm:ml-14 mb-12 z-30 ">
            <BookGymBox
              gym={gym}
              // IX_TSK: extraFees={extraFees} . . .like $50 for airport transportation ... ect
            />
          </div>
        </div>

        {/* Reviews */}
        <GymReviews reviews={reviews} rating={rating} />

        {/* Location Map */}
        {/* <GymSurroundings location={location} name={name} /> */}

        {/* Owner Details */}
        <OwnerDetails owner={gym_owner} />

        {/* Gym Details */}
        <GymDetails
          gymRules={gym_policies.gym_rules}
          safetyInfo={gym_policies.safety_info}
          cancellationPolicy={gym_policies.cancellation_policy}
        />

        {/* Nearby Gyms */}
        <NearbyGyms location={location} />
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
