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
}) => {
  return (
    <section className="responsive">
      {/* Submit Btn */}
      <button className="w-full py-3 px-6 bg-gradient-to-br from-red-500 to-red-700 hover:bg-gradient-to-tr hover:to-red-600 transition-all text-white font-bold rounded-lg text-lg shadow-md hover:shadow-xl active:shadow-sm active:bg-red-600">
        Reserve my spot!
      </button>
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
