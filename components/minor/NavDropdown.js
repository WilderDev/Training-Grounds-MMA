import Link from "next/link";
import { Fragment, useState } from "react";
import { useSession } from "next-auth/react";
import { Popover, Transition } from "@headlessui/react";
import { classNames } from "../../utils/misc.helpers";
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/solid";
import { v4 } from "uuid";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const ownerLinks = [
  {
    name: "Dashboard",
    description: "Create an account as a fighter or gym owner.",
    href: "/sign-up",
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

const fighterLinks = [
  {
    name: "Saved Camps",
    description: "Log in to your account to access all site features.",
    href: "/sign-in",
  },
  {
    name: "TSK",
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

const dropdownLinks = [
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

const NavDropdown = () => {
  // const [session, loading] = useSession();
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  const [isFighter, setIsFighter] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  console.log("session:", session);

  //    NOT AUTHORIZED
  if (!session) {
    return (
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
                    <SignIn
                      name="Sign Up"
                      desc="Create an account as a fighter or gym owner"
                    />
                    <SignIn
                      name="Sign In"
                      desc="Log in to our account to access all site features"
                    />
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
    );
  }

  // TSK!
  // FIGHTER AUTH
  if (session && isFighter) {
    return (
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
                    {fighterLinks.map((link) => (
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
                    <SignOut />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  }

  // TSK
  // OWNER AUTH
  if (session && isOwner) {
    return (
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
                    {ownerLinks.map((link) => (
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
                    <SignOut />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  }

  //   LOADING
  if (loading) {
    return <div>TSK LOADING</div>;
  }
};

export default NavDropdown;
