import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { v4 } from "uuid";

// const typeOfGyms = [
//   {
//     name: "MMA",
//     id: "mma",
//     description: "Mixed Martial Arts",
//     ariaLabelledBy: "filter-gyms_type-checkbox_type-gym-MMA",
//   },
//   {
//     name: "Muay Thai",
//     id: "muay-thai",
//     description: "Art of 8 Limbs",
//     ariaLabelledBy: "filter-gyms_type-checkbox_type-gym-Muay-Thai",
//   },
//   {
//     name: "BJJ",
//     id: "bjj",
//     description: "Brazilian Jiu-Jitsu",
//     ariaLabelledBy: "filter-gyms_type-checkbox_type-gym-BJJ",
//   },
// ];

const DropdownCheckbox = ({ selectedGymTypes, setSelectedGymTypes }) => {
  // TSK: Man this is ugly and not scalable but couldn't find a better way!

  useEffect(() => {
    console.log("selectedGymTypes:", selectedGymTypes);
  }, [selectedGymTypes]);

  return (
    <Menu as="div" className="relative  z-30" role="menu">
      <div>
        <Menu.Button className="button">Type of Gym</Menu.Button>
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
            <legend className="sr-only">Type of Gyms</legend>
            <div className="divide-y divide-gray-200 px-4">
              {/* MMA */}
              <div
                key={v4()}
                className="relative flex items-start py-4"
                aria-disabled="false"
                role="group"
                aria-labelledby="filter-gyms_type-checkbox_type-gym-MMA"
              >
                <div className="mr-5 flex items-center h-5">
                  <input
                    type="checkbox"
                    id="MMA"
                    name="MMA"
                    checked={selectedGymTypes.MMA}
                    onChange={() =>
                      setSelectedGymTypes({
                        MMA: !selectedGymTypes.MMA,
                        MuayThai: selectedGymTypes.MuayThai,
                        BJJ: selectedGymTypes.BJJ,
                      })
                    }
                    aria-describedby="MMA-description"
                    className="focus:ring-red-500 h-5 w-5 text-red-600 border-gray-300 rounded"
                  />
                </div>
                <div className="min-w-0 flex-1 text-sm">
                  <label
                    htmlFor="MMA"
                    className="font-medium text-gray-700 w-full block h-full"
                  >
                    MMA
                  </label>
                  <p id="MMA-description" className="text-gray-500">
                    Mixed Martial Arts
                  </p>
                </div>
              </div>

              {/* Muay Thai */}
              <div
                key={v4()}
                className="relative flex items-start py-4"
                aria-disabled="false"
                role="group"
                aria-labelledby="filter-gyms_type-checkbox_type-gym-Muay-Thai"
              >
                <div className="mr-5 flex items-center h-5">
                  <input
                    type="checkbox"
                    id="MuayThai"
                    name="MuayThai"
                    checked={selectedGymTypes.MuayThai}
                    onChange={() =>
                      setSelectedGymTypes({
                        MMA: selectedGymTypes.MMA,
                        MuayThai: !selectedGymTypes.MuayThai,
                        BJJ: selectedGymTypes.BJJ,
                      })
                    }
                    aria-describedby="MuayThai-description"
                    className="focus:ring-red-500 h-5 w-5 text-red-600 border-gray-300 rounded"
                  />
                </div>
                <div className="min-w-0 flex-1 text-sm">
                  <label
                    htmlFor="MuayThai"
                    className="font-medium text-gray-700 w-full block h-full"
                  >
                    Muay Thai
                  </label>
                  <p id="MuayThai-description" className="text-gray-500">
                    Art of 8 Limbs
                  </p>
                </div>
              </div>

              {/* BJJ */}
              <div
                key={v4()}
                className="relative flex items-start py-4"
                aria-disabled="false"
                role="group"
                aria-labelledby="filter-gyms_type-checkbox_type-gym-BJJ"
              >
                <div className="mr-5 flex items-center h-5">
                  <input
                    type="checkbox"
                    id="BJJ"
                    name="BJJ"
                    checked={selectedGymTypes.BJJ}
                    onChange={() =>
                      setSelectedGymTypes({
                        MMA: selectedGymTypes.MMA,
                        MuayThai: selectedGymTypes.MuayThai,
                        BJJ: !selectedGymTypes.BJJ,
                      })
                    }
                    aria-describedby="BJJ-description"
                    className="focus:ring-red-500 h-5 w-5 text-red-600 border-gray-300 rounded"
                  />
                </div>
                <div className="min-w-0 flex-1 text-sm">
                  <label
                    htmlFor="BJJ"
                    className="font-medium text-gray-700 w-full block h-full"
                  >
                    BJJ
                  </label>
                  <p id="BJJ-description" className="text-gray-500">
                    Brazilian Jiu-Jitsu
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownCheckbox;
