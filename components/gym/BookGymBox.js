import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { StarIcon } from "@heroicons/react/solid";
import ReserveGymModal from "../modals/ReserveGymModal";
import { useSelectedOptions } from "../../contexts/SelectedOption.context";
import { useReservationTotal } from "../../contexts/ReservationTotal.context";

const BookGymBox = ({ gym }) => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { numFighters, startDate, endDate } = router.query; // ... !!startDate && !!endDate

  const selectedOptions = useSelectedOptions();
  const { setTotal, perUnit, setPerUnit } = useReservationTotal();
  useEffect(() => {
    selectedOptions.setTrainingOption(gym.training_options[0]);
    selectedOptions.setAccommodationOption(gym.accommodation_options[0]);
    setPerUnit();
    setTotal();
  }, [selectedOptions]);

  return (
    <section className="responsive sm:sticky top-96 shadow-md md:px-10 md:py-8">
      {/* Top Bar - PricePer & Rating */}
      <div className="flex justify-between mb-6">
        {/* Price Per */}
        <div className="flex items-center">
          <p className="text-lg font-semibold pb-2 lg:text-2xl mr-2">
            {/* TSK: use currency package */}
            {gym.pricing.currency === "USD" && "$"}
            {perUnit?.amount}
          </p>
          <p className="text-gray-600">/ {perUnit?.unit}</p>
        </div>

        {/* Rating */}
        <p className="flex items-center">
          <StarIcon className="h-6 mr-1 text-red-400" />
          <span>{gym.rating}</span>
        </p>
      </div>

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

      <ReserveGymModal open={modalIsOpen} setOpen={setModalIsOpen} gym={gym} />
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
