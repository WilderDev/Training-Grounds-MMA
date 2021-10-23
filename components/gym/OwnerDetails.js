const OwnerDetails = ({ owner }) => {
  return (
    <section className="responsive">
      <h2 className="dynamicPageHeading">This gym is owned by {owner.name}</h2>
      In depth owner details iwth reviews, badges, descriptoin, contact button
      and more!
      <hr className="spacedHR" />
    </section>
  );
};

export default OwnerDetails;

// IX_TSK
// 1. Create gym owner object: { firstName, lastName, joinedOn, badges, reviews, gyms, city, country, state, bio, . . . }
