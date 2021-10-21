const GymSurroundings = ({ location }) => {
  const { latitude, longitude, city, country, state, description } = location;

  return (
    <section className="responsive">
      Map with cool places nearby, description, and show more modal button
    </section>
  );
};

export default GymSurroundings;

// TSK
// 1. Create location.helper function that takes in a location and returns nearby popular things
