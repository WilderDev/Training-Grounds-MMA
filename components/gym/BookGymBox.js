import { useState } from "react";
import { useRouter } from "next/router";
import { StarIcon } from "@heroicons/react/solid";

const BookGymBox = ({
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

  // Price, Rating, Check-in / Check-oiut, numFighters, total
  return (
    <section className="responsive">
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
      <div className=""></div>

      {/* Submit Btn */}
      <button
        onClick={() => setModalIsOpen(true)}
        className="w-full py-3 px-6 bg-gradient-to-br from-red-500 to-red-700 hover:bg-gradient-to-tr hover:to-red-600 transition-all text-white font-bold rounded-lg text-lg shadow-md hover:shadow-xl active:shadow-sm active:bg-red-600"
      >
        Reserve my spot!
      </button>
      <p className="text-xs text-gray-600">*TSK</p>
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
