import { Fragment, useState } from "react";
import Image from "next/image";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { classNames } from "../../utils/misc.helpers";
import { v4 } from "uuid";
import { locationsToString } from "../../utils/location.helpers";
import { useSelectedOption } from "../../contexts/SelectedOption.context";

const product = {
  name: "Basic Tee 6-Pack ",
  price: "$192",
  rating: 3.9,
  reviewCount: 117,
  href: "#",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
  imageAlt: "Two each of gray, white, and black shirts arranged on table.",
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
    { name: "XXXL", inStock: false },
  ],
};

const ReserveGymModal = ({
  open,
  setOpen,
  gym,
  setSelectedTrainingOption,
  selectedAccommodationOption,
  setSelectedAccommodationOption,
  selectedPackageOption,
  setSelectedPackageOption,
  trainingOptions,
  accommodationOptions,
  packageOptions,
}) => {
  const { name, reviews, total, rating, main_image_url, location } = gym;
  const test = useSelectedOption();
  console.log("test:", test);

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
            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
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

                      {/* IX_TSK */}
                      <p className="text-2xl text-gray-900">$TSK</p>

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
                        {/* Accommodations */}
                        <div>
                          <h4 className="text-sm text-gray-900 font-medium">
                            Accommodation Options
                          </h4>

                          <RadioGroup
                            value={selectedAccommodationOption}
                            onChange={setSelectedAccommodationOption}
                            className="mt-4"
                          >
                            <RadioGroup.Label className="sr-only">
                              Choose an accommodation option
                            </RadioGroup.Label>
                            <div className="flex items-center space-x-3">
                              {product.colors.map((color) => (
                                <RadioGroup.Option
                                  key={color.name}
                                  value={color}
                                  className={({ active, checked }) =>
                                    classNames(
                                      color.selectedClass,
                                      active && checked
                                        ? "ring ring-offset-1"
                                        : "",
                                      !active && checked ? "ring-2" : "",
                                      "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                                    )
                                  }
                                >
                                  <RadioGroup.Label as="p" className="sr-only">
                                    {color.name}
                                  </RadioGroup.Label>
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.class,
                                      "h-8 w-8 border border-black border-opacity-10 rounded-full"
                                    )}
                                  />
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Sizes */}
                        <div className="mt-10">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm text-gray-900 font-medium">
                              Package Options
                            </h4>
                            <a
                              href="#"
                              className="text-sm font-medium text-red-600 hover:text-red-500"
                            >
                              Package Options
                            </a>
                          </div>

                          <RadioGroup
                            value={selectedPackageOption}
                            onChange={setSelectedPackageOption}
                            className="mt-4"
                          >
                            <RadioGroup.Label className="sr-only">
                              Choose a size
                            </RadioGroup.Label>
                            <div className="grid grid-cols-4 gap-4">
                              {product.sizes.map((size) => (
                                <RadioGroup.Option
                                  key={size.name}
                                  value={size}
                                  disabled={!size.inStock}
                                  className={({ active }) =>
                                    classNames(
                                      size.inStock
                                        ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                                        : "bg-gray-50 text-gray-200 cursor-not-allowed",
                                      active ? "ring-2 ring-red-500" : "",
                                      "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <RadioGroup.Label as="p">
                                        {size.name}
                                      </RadioGroup.Label>
                                      {size.inStock ? (
                                        <div
                                          className={classNames(
                                            active ? "border" : "border-2",
                                            checked
                                              ? "border-red-500"
                                              : "border-transparent",
                                            "absolute -inset-px rounded-md pointer-events-none"
                                          )}
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <div
                                          aria-hidden="true"
                                          className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                        >
                                          <svg
                                            className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                            stroke="currentColor"
                                          >
                                            <line
                                              x1={0}
                                              y1={100}
                                              x2={100}
                                              y2={0}
                                              vectorEffect="non-scaling-stroke"
                                            />
                                          </svg>
                                        </div>
                                      )}
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        <button
                          type="submit"
                          className="mt-6 w-full bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
