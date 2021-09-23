import Image from "next/image";
import HeroBg from "../../public/images/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-[50vh] flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-grayblue-900" />
      <Image
        src={HeroBg}
        alt="Hero background tsk"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        priority={true}
        placeholder="blur"
        className="brightness-0 opacity-30"
      />

      <div className="relative text-center">
        <h1 className="text-red-500 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Find Your New Training Grounds
        </h1>
        <p className="text-sm font-medium text-white sm:text-lg">
          Never trained before? No worries.
        </p>
        <p className="text-sm font-medium text-white sm:text-lg">
          Thinking of moving? All good.
        </p>
        <p className="text-sm font-medium text-white sm:text-lg">
          Professional Fighter? We got you too.
        </p>
        {/* TSK: routing */}
        <button className="text-red-600 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl hover:scale-105 active:scale-90 transition duration-150">
          Let&apos;s Go
        </button>
      </div>
    </section>
  );
};

export default Hero;
