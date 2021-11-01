import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import { classNames } from "../../utils/misc.helpers";
import DateRangeCalendar from "../minor/DateRangeCalendar";
import NavDropdown from "../minor/NavDropdown";

const Header = ({ placeholder, isSticky }) => {
  const router = useRouter();
  // IX_TSK
  // const { numFighters, setNumFighters } = useExtraDetails();
  const [numFighters, setNumFighters] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  const onSearch = () => {
    router.push("/search");
    setSearchInput("");
  };

  return (
    <header
      className={classNames(
        !isSticky ? "relative" : "sticky",
        "top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10"
      )}
    >
      {/* Left - Logo */}
      <Link href="/">
        <a className="hidden relative lg:flex items-center h-10 cursor-pointer my-auto">
          <Image
            src="/icons/Training-Grounds_Logo-Icon.png"
            alt="Training Grounds Logo Triangle Arrow with open space."
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            quality={100}
            priority={true}
          />
          <p className="hidden xl:block font-black ml-14 text-2xl">
            Training Grounds
          </p>
        </a>
      </Link>

      {/* Center - Search */}
      <div className="col-span-2 lg:col-span-1 flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
        <input
          type="search"
          placeholder={placeholder || "Where do you want to go?"}
          className="flex-grow pl-5 bg-transparent outline-none border-none focus:ring-transparent text-sm text-gray-600 placeholder-gray-400"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
          onClick={onSearch}
        />
      </div>

      {/* Right - Links */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <Link href="/gym-owners-join-us">
          <a className="hidden md:inline cursor-pointer">Add your gym</a>
        </Link>
        {/* <GlobeAltIcon className="h-6 cursor-pointer" /> */}

        <NavDropdown />
      </div>

      {/* Bot - Calendar */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-4">
          <DateRangeCalendar />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Fighters
            </h2>

            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none border-none text-red-400"
              min={1}
              value={numFighters || 1}
              onChange={(e) => setNumFighters(e.target.value)}
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={onSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
