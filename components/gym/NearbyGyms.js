const NearbyGyms = ({ location }) => {
  const { latitude, longitude, city, country, state, description } = location;

  return (
    <section className="responsive">
      List of all nearby gyms by city... probably create another component for
      by trainingModality
    </section>
  );
};

export default NearbyGyms;

// TSK
// 1. Create helper function that takes in a location and returns similar resutls
