import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ cardData }) => {
  return (
    <Link href={cardData.href}>
      <a className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
        <div className="relative h-80 w-80">
          <Image
            src={cardData.img}
            alt={cardData.title}
            layout="fill"
            className="rounded-xl"
          />
        </div>
        <h3 className="text-2xl mt-3">{cardData.title}</h3>
      </a>
    </Link>
  );
};

export default CategoryCard;
