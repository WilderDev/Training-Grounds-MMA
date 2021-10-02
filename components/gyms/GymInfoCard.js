import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const GymInfoCard = ({
  title,
  desc,
  img,
  location,
  lat,
  long,
  price,
  total,
  star,
}) => {
  return (
    <div className="flex py-7 pl-2 pr-4 border-b cursor-pointer group hover:bg-gray-800 hover:text-white hover:shadow-lg transition duration-200 ease-out first:border-t">
      {/* Image */}
      <div className="relative h-24 w-40 flex-shrink-0 md:h-52 md:w-80">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-grow pl-5">
        {/* Location and Heart */}
        <div className="flex justify-between">
          <p className="">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        {/* Title */}
        <h4 className="text-xl">{title}</h4>

        {/* Divider Line */}
        <div className="border-b w-10 pt-2" />

        {/* Description */}
        <p className="pt-2 text-sm text-gray-500  group-hover:text-gray-300 flex-grow">
          {desc}
        </p>

        {/* Bottom Row */}
        <div className="flex justify-between pt-5">
          {/* Star */}
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          {/* Price */}
          <div className="">
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymInfoCard;
