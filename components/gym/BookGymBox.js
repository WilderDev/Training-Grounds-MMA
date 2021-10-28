import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/solid";
import ReserveGymModal from "../modals/ReserveGymModal";
import { useSelectedOptions } from "../../contexts/SelectedOption.context";
import { useReservationTotal } from "../../contexts/ReservationTotal.context";
import SelectDatesModal from "../modals/SelectDatesModal";
import { useSelectedDates } from "../../contexts/SelectedDates.context";
import { getLocalDateString } from "../../utils/time.helpers";

const BookGymBox = ({ gym }) => {
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);
  const [optionPickerIsOpen, setOptionPickerIsOpen] = useState(false);

  const selectedOptions = useSelectedOptions();
  const { setTotal, perUnit, setPerUnit } = useReservationTotal();
  const { startDate, endDate, stayDurationLength, stayDurationOption } =
    useSelectedDates();
  useEffect(() => {
    selectedOptions.setTrainingOption(gym.training_options[0]);
    selectedOptions.setAccommodationOption(gym.accommodation_options[0]);
  }, []);

  useEffect(() => {
    setPerUnit();
    setTotal();
  }, [selectedOptions, stayDurationLength, stayDurationOption]);

  return (
    <section className="responsive sm:sticky top-96 shadow-md md:px-10 md:py-8">
      {/* Top Bar - PricePer & Rating */}
      <div className="flex justify-between mb-2">
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

      {/* Middle - Options & Dates */}
      <div className="mb-8 space-y-2">
        {selectedOptions?.trainingOption && (
          <p>
            Training Option:{" "}
            <span className="text-red-600 font-light">
              {selectedOptions.trainingOption.name}
            </span>
          </p>
        )}
        {selectedOptions?.accommodationOption && (
          <p>
            Accommodation Option:{" "}
            <span className="text-red-600 font-light">
              {selectedOptions.accommodationOption.name}
            </span>
          </p>
        )}
        {selectedOptions?.packageOption && (
          <p>
            Package Option:{" "}
            <span className="text-red-600 font-light">
              {selectedOptions.packageOption.name}
            </span>
          </p>
        )}

        {/* Dates */}
        {startDate.getDay() !== endDate.getDay() && (
          <div className="pt-8">
            {startDate && (
              <p>
                Start Date:{" "}
                <span className="text-gray-700 font-light">
                  {getLocalDateString(startDate)}
                </span>
              </p>
            )}
            {endDate && (
              <p>
                End Date:{" "}
                <span className="text-gray-700 font-light">
                  {getLocalDateString(endDate)}
                </span>
              </p>
            )}
          </div>
        )}
      </div>

      {/* TSK: Up there . . . put dates if we gotz any */}

      {/* Submit Btn */}
      <button
        onClick={() => setDatePickerIsOpen(true)}
        className="w-full py-3 px-6 bg-gradient-to-br from-red-500 to-red-700 hover:bg-gradient-to-tr hover:to-red-600 transition-all text-white font-bold rounded-lg text-lg shadow-xs hover:shadow-md active:shadow-sm active:bg-red-600"
      >
        Reserve my spot!
      </button>
      <p className="text-xs text-gray-600 mt-2">
        *Clicking here does not lock you in to a purchase.
      </p>

      <SelectDatesModal
        open={datePickerIsOpen}
        setOpen={setDatePickerIsOpen}
        setOptionPickerIsOpen={setOptionPickerIsOpen}
      />
      <ReserveGymModal
        open={optionPickerIsOpen}
        setOpen={setOptionPickerIsOpen}
        gym={gym}
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
