import { Fragment, useState } from "react";
import Image from "next/image";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { classNames } from "../../utils/misc.helpers";
import { v4 } from "uuid";
import { locationsToString } from "../../utils/location.helpers";
import { useSelectedOptions } from "../../contexts/SelectedOption.context";
import { useReservationTotal } from "../../contexts/ReservationTotal.context";
import { getTimeScale, getTimeScaleNum } from "../../utils/time.helpers";

const ReserveGymModal = ({ open, setOpen, gym }) => {
  const {
    name,
    reviews,
    rating,
    main_image_url,
    location,
    accommodation_options,
    training_options,
    package_options,
  } = gym;
  const { total } = useReservationTotal();
  const selectedOptions = useSelectedOptions();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto z-50"
        onClose={setOpen}
      >
        <div
          className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
          style={{ fontSize: 0 }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden md:inline-block md:align-middle md:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-7xl">
              <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5 h-full">
                    {/* TSK */}
                    <Image
                      src={main_image_url}
                      alt={name}
                      layout="fill"
                      className="object-center object-cover"
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
                      {name}
                    </h2>

                    <p className="text-gray-600 font-light">
                      {locationsToString(
                        location.city,
                        location.state,
                        location.country
                      )}
                    </p>

                    <section
                      aria-labelledby="information-heading"
                      className="mt-2"
                    >
                      <h3 id="information-heading" className="sr-only">
                        Gym information
                      </h3>

                      <div className="flex items-center">
                        <p className="text-lg text-gray-900 pb-1 lg:text-2xl mr-2">
                          ${total}
                        </p>
                        <p className="text-gray-600 font-light text-sm">
                          (total for{" "}
                          {`${getTimeScaleNum(
                            selectedOptions.stayDurationLength
                          )} ${getTimeScale(
                            selectedOptions.stayDurationLength
                          )}`}
                          )
                        </p>
                      </div>

                      {/* Reviews */}
                      <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((r) => (
                              <StarIcon
                                key={v4()}
                                className={classNames(
                                  rating > r
                                    ? "text-gray-900"
                                    : "text-gray-200",
                                  "h-5 w-5 flex-shrink-0"
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">{rating} out of 5 stars</p>
                          <a
                            href="#"
                            className="ml-3 text-sm font-medium text-red-600 hover:text-red-500"
                          >
                            {reviews.length} reviews
                          </a>
                        </div>
                      </div>
                    </section>

                    <section
                      aria-labelledby="options-heading"
                      className="mt-10"
                    >
                      <h3 id="options-heading" className="sr-only">
                        Accommodation Options
                      </h3>

                      <form>
                        {/* Training */}
                        <div className="mt-8">
                          <h4 className="text-sm text-gray-900 font-medium">
                            Training Options
                          </h4>

                          <RadioGroup
                            value={selectedOptions.trainingOption}
                            onChange={selectedOptions.setTrainingOption}
                            className="mt-4"
                          >
                            <RadioGroup.Label className="sr-only">
                              Choose a Training Option
                            </RadioGroup.Label>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                              {training_options.map((option) => (
                                <RadioGroup.Option
                                  key={v4()}
                                  value={option}
                                  className={classNames(
                                    option === selectedOptions.trainingOption &&
                                      "ring-2 ring-red-500",
                                    "bg-white shadow-sm text-sm text-gray-900 cursor-pointer group relative border rounded-md py-3 px-4 flex flex-col hover:bg-gray-50 focus:outline-none sm:flex-1"
                                  )}
                                >
                                  <RadioGroup.Label
                                    as="p"
                                    className="font-medium uppercase"
                                  >
                                    {option.name}
                                  </RadioGroup.Label>
                                  <p className="text-gray-600 font-light mt-2">
                                    {option.description}
                                  </p>
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Accommodations */}
                        <div className="mt-8">
                          <h4 className="text-sm text-gray-900 font-medium">
                            Accommodation Options
                          </h4>

                          <RadioGroup
                            value={selectedOptions.accommodationOption}
                            onChange={selectedOptions.setAccommodationOption}
                            className="mt-4"
                          >
                            <RadioGroup.Label className="sr-only">
                              Choose an Accommodation Option
                            </RadioGroup.Label>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                              {accommodation_options.map((option) => (
                                <RadioGroup.Option
                                  key={v4()}
                                  value={option}
                                  className={classNames(
                                    option ===
                                      selectedOptions.accommodationOption &&
                                      "ring-2 ring-red-500",
                                    "bg-white shadow-sm text-sm text-gray-900 cursor-pointer group relative border rounded-md py-3 px-4 flex flex-col hover:bg-gray-50 focus:outline-none sm:flex-1"
                                  )}
                                >
                                  <RadioGroup.Label
                                    as="p"
                                    className="font-medium uppercase"
                                  >
                                    {option.name}
                                  </RadioGroup.Label>
                                  <p className="text-gray-600 font-light mt-2">
                                    {option.description}
                                  </p>
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Packages */}
                        <div className="mt-8">
                          <h4 className="text-sm text-gray-900 font-medium">
                            Package Options
                          </h4>

                          <RadioGroup
                            value={selectedOptions.packageOption}
                            onChange={selectedOptions.setPackageOption}
                            className="mt-4"
                          >
                            <RadioGroup.Label className="sr-only">
                              Choose a Package Option
                            </RadioGroup.Label>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                              {package_options.map((option) => (
                                <RadioGroup.Option
                                  key={v4()}
                                  value={option}
                                  className={classNames(
                                    option === selectedOptions.packageOption &&
                                      "ring-2 ring-red-500",
                                    "bg-white shadow-sm text-sm text-gray-900 cursor-pointer group relative border rounded-md py-3 px-4 flex flex-col hover:bg-gray-50 focus:outline-none sm:flex-1"
                                  )}
                                >
                                  <RadioGroup.Label
                                    as="p"
                                    className="font-medium uppercase"
                                  >
                                    {option.name}
                                  </RadioGroup.Label>
                                  <p className="text-gray-600 font-light mt-2">
                                    {option.description}
                                  </p>
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        <button
                          disabled={
                            !selectedOptions.packageOption &&
                            !selectedOptions.trainingOption
                          }
                          type="submit"
                          className="mt-6 disabled:bg-red-900 disabled:cursor-not-allowed w-full bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Reserve My Spot
                        </button>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ReserveGymModal;
