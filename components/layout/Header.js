import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { SearchIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { v4 } from "uuid";
import { classNames } from "../../utils/misc.helpers";
import {
  defaultInputRanges,
  defaultStaticRanges,
} from "../../utils/calendar.helpers";

// TSK: useMedia React Hook: https://github.com/vercel/next.js/discussions/14810 (for the logo text showing on certain screen widths)

const dropdownLinks = [
  {
    name: "Sign up",
    description: "Create an account as a fighter or gym owner.",
    href: "/sign-up",
  },
  {
    name: "Sign in",
    description: "Log in to your account to access all site features.",
    href: "/sign-in",
  },
  {
    name: "Add your gym",
    description:
      "Are you a gym owner? Make your training camp known to the world!",
    href: "/gym-owners-join-us",
  },
  {
    name: "Help",
    description:
      "Check out our FAQ to learn more about how Training Grounds operates.",
    href: "/faq",
  },
];

const Header = ({ placeholder }) => {
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
    setSearchInput("");
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

      {/* TSK: Search should have training options instead of the Last Week... etc */}
      {/* Center - Search */}
      <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
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

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                aria-label="user details and options dropdown menu"
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                )}
              >
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                  <UserCircleIcon className="h-6" />
                  <ChevronDownIcon className="h-6" />
                </div>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 left-full transform -translate-x-full mt-3 px-2 w-screen max-w-xs sm:px-0">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {dropdownLinks.map((link) => (
                        <Link href={link.href} key={v4()}>
                          <a className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                            <p className="text-base font-medium text-gray-900">
                              {link.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {link.description}
                            </p>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>

      {/* Bot - Calendar */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            disabledDates={[new Date().getDate() - 1]}
            rangeColors={["#ef4444"]}
            onChange={handleSelectDates}
            staticRanges={defaultStaticRanges}
            inputRanges={defaultInputRanges}
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
