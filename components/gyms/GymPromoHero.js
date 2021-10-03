import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const GymAddHero = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="relative bg-gray-900 h-screen flex flex-col md:flex-row justify-between">
      {/* Left - Text Section */}
      <div className="flex flex-col items-center justify-center text-center m-12 md:mx-24 max-w-xl">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-50 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span className="block xl:inline">Attract Great Fighters</span>{" "}
          <span className="block text-red-600 xl:inline">
            and grow your business
          </span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-10 ">
          <Link href={isAuthenticated ? "/add-my-gym" : "/sign-up"}>
            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10">
              Get started
            </a>
          </Link>
        </div>
      </div>

      {/* Right - Image */}
      <div className="relative w-full h-full inset-0">
        <Image
          src="/images/sign-up_bg.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default GymAddHero;
