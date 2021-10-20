import { useState } from "react";
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
    package_options,
    accommodation_options,
    training_options,
    gym_owner,
    trainers,
  } = gym;

  const [selectedTrainingOption, setSelectedTrainingOption] = useState(
    training_options[0]
  );
  const [selectedPackageOption, setSelectedPackageOption] = useState(
    package_options[0]
  );
  const [selectedAccommodationOption, setSelectedAccommodationOption] =
    useState(accommodation_options[0]);
  const [stayDurationOption, setStayDurationOption] = useState("perDay");
  const [stayDurationLength, setStayDurationLength] = useState(3);
  const [total, setTotal] = useState(
    selectedPackageOption.prices[stayDurationOption]
  );

  console.log("total:", total);

  const getTotal = () => {
    if (selectedPackageOption)
      setTotal(
        selectedPackageOption.prices[stayDurationOption] * stayDurationLength
      );

    if (!selectedPackageOption) {
      const trainingPrice =
        selectedTrainingOption.prices[stayDurationOption] * stayDurationLength;
      // TSK: Create a helper function that takes in the amount of days...
      // and returns the correct number for stayDurationLength depending on the stayDurationOptions...
      // eg: 6days === 6; 12days === 2; 33days === 1;
      const accommPrice =
        selectedAccommodationOption.prices[stayDurationOption] *
        stayDurationLength;

      setTotal(trainingPrice + accommPrice);
    }
  };

  return (
    <Layout isSticky={false}>
      <Head>
        <title>
          {name} | {location.city}, {location.country} | Training Grounds | MMA
          Gym Finder
        </title>
        <meta name="description" content={description} />
      </Head>

      <div className="relative w-screen sm:max-w-7xl mx-auto mt-6 lg:mt-7  sm:px-6 lg:px-8">
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
            <GymDescription desc={description} detailedDesc={"IX_TSK"} />

            {/* Meet Trainers */}
            <MeetTheTrainers trainers={trainers} />

            {/* Gym Amenities */}
            <GymAmenities amenities={amenities} />

            {/* Gym Calendar Availability */}
            <AvailabilityCalendar />
          </div>

          {/* Book Gym */}
          <div className="fixed w-screen bottom-0 sm:static sm:w-1/3  bg-white z-50 shadow-md p-5 md:px-10 mt-10">
            <BookGymBox
              packageOptions={package_options}
              trainingOptions={training_options}
              accommodationOptions={accommodation_options}
              selectedTrainingOption={selectedTrainingOption}
              setSelectedTrainingOption={setSelectedTrainingOption}
              selectedAccommodationOption={selectedAccommodationOption}
              setSelectedAccommodationOption={setSelectedAccommodationOption}
              selectedPackageOption={selectedPackageOption}
              setSelectedPackageOption={setSelectedPackageOption}
              // IX_TSK: extraFees={extraFees} . . .like $50 for airport transportation ... ect
              total={total}
            />
          </div>
        </div>

        {/* Reviews */}
        <GymReviews reviews={reviews} rating={rating} />

        {/* Location Map */}
        <GymSurroundings location={location} />

        {/* Owner Details */}
        <OwnerDetails owner={gym_owner} />

        {/* Gym Details */}
        <GymDetails
          gymRules="TSK create in database"
          safetyInfo="TSK create in DB"
          cancellationPolicy="TSK create in database"
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
