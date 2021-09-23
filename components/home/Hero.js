import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero background tsk"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        priority={true}
        className="brightness-50"
      />

      <div className="absolute top-1/3 w-full text-center">
        <p className="text-sm font-medium text-white sm:text-lg">
          Never trained before? No worries.
        </p>
        <button className="text-red-600 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm Interested
        </button>
      </div>
    </div>
  );
};

export default Hero;
