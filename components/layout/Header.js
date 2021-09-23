import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      {/* Left */}
      <div className="relative ">
        <Image
          src="/icons/Training-Grounds_Logo-Full.png"
          alt="Training Grounds Logo Triangle Arrow with open space."
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Center */}
      <div className=""></div>

      {/* Right */}
      <div className=""></div>
    </header>
  );
};

export default Header;
