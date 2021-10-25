// https://heroicons.com/

import DropdownToggle from "../minor/dropdownToggle";

const GymDetails = ({ gymRules, safetyInfo, cancellationPolicy }) => {
  return (
    <section className="responsive">
      <h2 className="hidden sm:dynamicPageHeading">Know before you go</h2>

      {/* House Rules */}
      <DropdownToggle
        title="Gym Rules"
        desc="Be the type of fighter everyone wants to train with."
        list={gymRules}
      />

      <hr className="spacedHR" />

      {/* Health & Safety */}
      <DropdownToggle
        title="Safety Info"
        desc="Having a healthy body and mind is paramount to martial art success."
        list={safetyInfo}
      />

      <hr className="spacedHR" />

      {/* Cancellation Policy */}
      <DropdownToggle
        title="Cancellation Policy"
        desc="Have integrity and do what you say you will."
        list={cancellationPolicy}
      />

      <hr className="spacedHR" />
    </section>
  );
};

export default GymDetails;
