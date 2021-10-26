import { useState } from "react";
import { useRouter } from "next/router";
import { StarIcon } from "@heroicons/react/solid";
import ReserveGymModal from "../modals/ReserveGymModal";

const BookGymBox = ({
  name,
  reviews,
  packageOptions,
  trainingOptions,
  accommodationOptions,
  selectedTrainingOption,
  setSelectedTrainingOption,
  selectedAccommodationOption,
  setSelectedAccommodationOption,
  selectedPackageOption,
  setSelectedPackageOption,
  total,
  currency,
  rating,
}) => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { numFighters, startDate, endDate } = router.query;
  // ... !!startDate && !!endDate

  return (
    <section className="responsive sm:sticky top-96 shadow-md md:px-10 md:py-8">
      {/* Top Bar - PricePer & Rating */}
      <div className="flex justify-between mb-6">
        {/* Price Per */}
        <div className="flex items-center">
          <p className="text-lg font-semibold pb-2 lg:text-2xl mr-2">
            {/* TSK: use currency package */}
            {currency === "USD" && "$"}
            {selectedTrainingOption.prices.perDay}
          </p>
          <p className="text-gray-600">/ day</p>
        </div>

        {/* Rating */}
        <p className="flex items-center">
          <StarIcon className="h-6 mr-1 text-red-400" />
          <span>{rating}</span>
        </p>
      </div>

      {/* Middle Section - Checkin/out & numFighters */}
      {/* <div className="border rounded-md mb-6 flex flex-wrap"> */}
      {/* Check In */}
      {/* <div className="w-full border p-4"> */}
      {/* <p className="font-semibold text-xs uppercase">Check-In</p> */}
      {/* <input */}
      {/* className="text-gray-500 mt-1 border-none outline-none" */}
      {/* type="text" */}
      {/* placeholder="Add Date" */}
      {/* /> */}
      {/* </div> */}

      {/* Check Out */}
      {/* <div className="w-full border p-4">Check out</div> */}

      {/* Num Fighters */}
      {/* <div className="w-full p-4">Num</div> */}
      {/* </div> */}

      {/* Submit Btn */}
      <button
        onClick={() => setModalIsOpen(true)}
        className="w-full py-3 px-6 bg-gradient-to-br from-red-500 to-red-700 hover:bg-gradient-to-tr hover:to-red-600 transition-all text-white font-bold rounded-lg text-lg shadow-xs hover:shadow-md active:shadow-sm active:bg-red-600"
      >
        Reserve my spot!
      </button>
      <p className="text-xs text-gray-600 mt-2">
        *Clicking here does not lock you in to a purchase.
      </p>

      <ReserveGymModal
        open={modalIsOpen}
        setOpen={setModalIsOpen}
        name={name}
        reviews={reviews}
        rating={rating}
        total={total}
      />
    </section>
  );
};

export default BookGymBox;

// IX_TSK
// ~ You can probably have the accomm come from the router or context bc we use it in the search as well
// 1. Send Router Query through link and into this component for startDate, endDate, numFighters
// 2. Use the start date and end date previously chosen if they have it in
// 3. Have this update the parents state for price/nights
// 4. Add offer_options
// 5. Calculate Taxes
// 6. Button should be a gradient w/ smooth hover
{
  /* /TSK eventually the report listings will go here as well */
}
// 7. Should go to navbar when scroll down farther
