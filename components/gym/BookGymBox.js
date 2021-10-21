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
      Add Checkin and Checkout dates, numFighters, and big button...
      {/* /TSK eventually the report listings will go here as well */}
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
