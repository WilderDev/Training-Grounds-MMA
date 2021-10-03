import Image from "next/image";
import Footer from "./Footer";

const AltLayout = ({ children }) => {
  return (
    <>
      <header className="absolute w-full top-5 left-5 md:top-10 md:left-14">
        <div
          className="hidden sm:block relative h-10 cursor-pointer my-auto"
          onClick={() => router.push("/")}
        >
          <Image
            src="/icons/Training-Grounds_Logo-Icon.png"
            alt="Training Grounds Logo Triangle Arrow with open space."
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AltLayout;
