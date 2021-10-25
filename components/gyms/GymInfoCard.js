import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const GymInfoCard = ({ info, numFighters, startDate, endDate }) => {
  const {
    title,
    name,
    description,
    location,
    pricing,
    rating,
    main_image_url,
    training_options,
    href,
  } = info;

  return (
    <div className="flex flex-col relative md:flex-row z-10 py-7 pl-2 pr-4 border-b cursor-pointer group hover:bg-gray-800 hover:text-white hover:shadow-lg transition duration-200 ease-out first:border-t">
      <Link
        href={{
          pathname: `/training-camps/${href}`,
          query: { numFighters, startDate, endDate },
        }}
      >
        <a
          target={href}
          rel="noopener noreferrer"
          aria-labelledby={title}
          className="w-full h-full absolute z-40 opacity-0"
        >
          See more details about training at {name} - {title}
        </a>
      </Link>

      {/* Image */}
      <div className="relative h-24 w-full flex-shrink-0 md:h-60 md:w-80 self-center">
        <Image
          src={main_image_url}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-grow pl-5">
        {/* Location and Heart */}
        <div className="flex justify-between items-center text-sm pb-2 ">
          <p className="">
            {location.city}, {location.country}
          </p>
          <HeartIcon
            type="button"
            aria-label="Add training camp to favorites"
            className="h-7 cursor-pointer z-50 hover:text-red-500"
          />
        </div>

        {/* Title */}
        <h3 className="text-xl">{title}</h3>

        {/* Divider Line */}
        <div className="border-b w-10 pt-2" />

        {/* Description */}
        <p className="pt-2 text-sm text-gray-500  group-hover:text-gray-300 flex-grow">
          {description}
        </p>

        {/* Bottom Row */}
        <div className="flex justify-between pt-5">
          {/* Star */}
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {rating}
          </p>

          {/* Price */}
          <div>
            <p className="text-right font-extralight">Starting at</p>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">
              {/* TSK: use currency package */}
              {pricing.currency === "USD" && "$"}
              {training_options[0].prices.perDay}/day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymInfoCard;
