import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { v4 } from "uuid";

const allTrainingModalities = [
  {
    name: "MMA",
    id: "mma",
    value: "Mixed Martial Arts",
    description: "Mixed Martial Arts",
    ariaLabelledBy: "filter-gyms_type-checkbox_type-gym-mma",
  },
  {
    name: "Muay Thai",
    id: "muay-thai",
    value: "Muay Thai",
    description: "Art of 8 Limbs",
    ariaLabelledBy: "filter-gyms_type-checkbox_type-gym-muay-thai",
  },
  {
    name: "BJJ",
    id: "bjj",
    value: "Brazilian Jiu Jitsu",
    description: "Brazilian Jiu-Jitsu",
    ariaLabelledBy: "filter-gyms_type-checkbox_type-gym-bjj",
  },
];

const DropdownCheckbox = ({ trainingModalities, updateModalities }) => {
  return (
    <Menu as="div" className="relative  z-30" role="menu">
      <div>
        <Menu.Button className="button">Fighting Styles</Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          static
          className=" absolute top-12 left-0 z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
        >
          <fieldset className="border-t border-b border-gray-200">
            <legend className="sr-only">Fighting Styles</legend>
            <div className="divide-y divide-gray-200 px-4">
              {allTrainingModalities?.map((style) => (
                <div
                  key={v4()}
                  className="relative flex items-start py-4"
                  aria-disabled="false"
                  role="group"
                  aria-labelledby={style.ariaLabelledBy}
                >
                  <div className="mr-5 flex items-center h-5">
                    <input
                      type="checkbox"
                      id={style.id}
                      name={style.name}
                      checked={trainingModalities.includes(style.value)}
                      onChange={() => updateModalities(style.value)}
                      aria-describedby={`${style.id}-description`}
                      className="focus:ring-red-500 h-5 w-5 text-red-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="min-w-0 flex-1 text-sm">
                    <label
                      htmlFor={style.name}
                      className="font-medium text-gray-700 w-full block h-full"
                    >
                      {style.name}
                    </label>
                    <p id={`${style.id}-description`} className="text-gray-500">
                      {style.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownCheckbox;
