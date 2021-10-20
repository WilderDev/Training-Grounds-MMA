import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { v4 } from "uuid";

const GymFeatures = ({ name, features, stylesOffered }) => {
  const icon = { icon: <PaperAirplaneIcon className="h-5 pr-4" /> };

  return (
    <section className="">
      {/* Top Bar - Title, Styles */}
      <h2>{name}</h2>
      <p className="space-x-4">
        {stylesOffered.map((style) => (
          <span key={v4()}>{style}</span>
        ))}
      </p>

      {/* Divider */}
      <hr />

      {/* Bot Content - Features */}
      <ul className="space-y-4 my-6">
        {features.map((feature) => (
          <li key={v4()} className="flex items-center">
            {/* <PaperAirplane.Icon className="h-5 pr-4" /> */}
            {icon.icon}
            <p className="flex flex-col">
              <span>{feature.feature}</span>
              <span>{feature.description}</span>
            </p>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <hr />
    </section>
  );
};

export default GymFeatures;
