import { BadgeCheckIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { getMonthAndYear } from "../../utils/time.helpers";

const dummy = {
  first_name: "Jacob",
  last_name: "Rivers",
  email: "jjrivers@gmail.com",
  phone: null,
  is_verified: true,
  joined_on: new Date(),
  badges: ["Verified", "Champion"],
  reviews: [{}, {}],
  gyms: ["TSK Ref to Master Martial Arts Gym"],
  location: {
    city: "Bankok",
    state: null,
    // TSK zip:
    country: "Thailand",
  },
  bio: "I like beef... like... a lot!",
  public_message:
    "We are accepting all fighters, from all locations, levels, and backgrounds. Please send us a message to get in touch!",
  profile_picture: "https://source.unsplash.com/150x150/?man,face",
  stats: {
    response_rate: "99%",
    avg_response_time: "3 hours",
    // tsk
  },
  payment_info: {
    // tsk
  },
};

const OwnerDetails = ({ owner }) => {
  // const {  } = owner;

  return (
    <section className="responsive">
      {/* Top bar - Title, Joined, Image */}
      <div className="flex items-center  mb-6">
        <div className="flex flex-col sm:order-2">
          {/* Title */}
          <h2 className="dynamicPageHeading mb-1 ">
            This gym is owned by {dummy.first_name} {dummy.last_name}
          </h2>

          {/* Joined */}
          <p className="text-gray-700 text-sm">
            Joined in {getMonthAndYear(dummy.joined_on)}
          </p>
        </div>

        {/* Image */}
        <div className="relative ml-auto sm:order-1 sm:ml-0 sm:mr-4">
          <Image
            src={dummy.profile_picture}
            alt={dummy.first_name + dummy.last_name + "profile"}
            width={60}
            height={60}
            className="rounded-full"
          />
          {/* Badge */}
          <div className="absolute top-9 -right-1 z-20">
            <BadgeCheckIcon className="h-7 text-red-500 fill bg-gray-100 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom or Side to Side */}
      <div className="">
        {/* Left - Badges, Location, Bio, Public Message */}
        <div className="flex flex-col">
          {/* Badges */}
          <div className="flex flex-wrap"></div>

          {/* Location */}

          {/* Bio */}

          {/* Public Message */}
        </div>

        {/* Right - Stats, Contact Button */}
        <div className="flex flex-col">
          {/* Stats */}

          {/* Contact */}

          {/* TSK - Protect Payment badge */}
        </div>
      </div>

      <hr className="spacedHR" />
    </section>
  );
};

export default OwnerDetails;

// IX_TSK
// 1. Create gym owner object: { firstName, lastName, joinedOn, badges, reviews, gyms, city, country, state, bio, . . . }
// 2. To protect your payment, never transfer money or communicate outside of the Airbnb website or app. . .
