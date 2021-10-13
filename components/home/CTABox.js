import Image from "next/image";
import { useRouter } from "next/router";

const CTABox = ({ title, description, image, buttonText }) => {
  const router = useRouter();
  return (
    <section className="relative py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={image}
          alt={description}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-2xl brightness-50"
        />
      </div>

      <div className="absolute top-32 left-28 text-white">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button
          onClick={() => router.push("gym-owners-join-us")}
          className="text-sm bg-red-800 px-5 py-3 rounded-lg mt-5"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default CTABox;
