import Image from "next/image";
import Link from "next/link";

const LocationGridItem = ({ location }) => {
  return (
    <Link href={location.href}>
      <a className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
        {/* Left - Image */}
        <div className="relative h-16 w-16">
          <Image
            src={location.img}
            alt={location.location}
            layout="fill"
            className="rounded-lg"
          />
        </div>

        {/* Right - Info */}
        <div>
          <h3>{location.location}</h3>
          <h4 className="text-gray-500">{location.distance}</h4>
        </div>
      </a>
    </Link>
  );
};

export default LocationGridItem;
