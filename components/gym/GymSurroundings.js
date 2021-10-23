const GymSurroundings = ({ location }) => {
  const { latitude, longitude, city, country, state, description } = location;

  return (
    <section className="responsive">
      <h2 className="dynamicPageHeading">Around the area</h2>
      Map with cool places nearby, description, and show more modal button
      <hr className="spacedHR" />
    </section>
  );
};

export default GymSurroundings;

// TSK
// 1. Create location.helper function that takes in a location and returns nearby popular things
