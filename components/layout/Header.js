import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// TSK: useMedia React Hook: https://github.com/vercel/next.js/discussions/14810 (for the logo text showing on certain screen widths)

const Header = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [numFighters, setNumFighters] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelectDates = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const onSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numFighters: numFighters,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left - Logo */}
      <div
        className="hidden relative sm:flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
        <Image
          src="/icons/Training-Grounds_Logo-Icon.png"
          alt="Training Grounds Logo Triangle Arrow with open space."
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          quality={100}
          priority={true}
        />
        <p className="hidden lg:block font-black ml-14 text-2xl">
          Training Grounds
        </p>
      </div>

      {/* Center - Search */}
      <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right - Links */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        {/* TSK */}
        <Link href="/">
          <a className="hidden md:inline cursor-pointer">Add your gym</a>
        </Link>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        {/* TSK should open a dropdown */}
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {/* Bot - Calendar */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#ef4444"]}
            onChange={handleSelectDates}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Fighters
            </h2>

            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              min={1}
              value={numFighters}
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
