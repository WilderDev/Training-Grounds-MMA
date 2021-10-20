const TitleInfoBar = ({ desc, name, city, country, numReviews, rating }) => {
  return (
    <section>
      <h1>
        {desc} - {name}
      </h1>
      reviews, badges, location, share, save
    </section>
  );
};

export default TitleInfoBar;

// IX_TSK
// 1. Click reviews and open modal box
// 2. Add badges for user... => Get access to user context!
// 3. Open GymSurroundings like component on click on location
// 4. Share button should work
// 5. Save button should save this gym to users favorites
