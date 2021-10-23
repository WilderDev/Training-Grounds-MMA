import Image from "next/image";
import { v4 } from "uuid";
import { getMatchingFeatureIcon } from "../../utils/icon.helpers";
import { BadgeCheckIcon } from "@heroicons/react/solid";

const GymFeatures = ({ name, features, stylesOffered }) => {
  const featuresWithIcons = features.map((feature) => {
    const icon = getMatchingFeatureIcon(feature.icon);
    return {
      ...feature,
      icon,
    };
  });

  return (
    <section className="responsive">
      {/* Top Bar - Title, Styles, userProfile */}
      <div className="flex justify-between items-center">
        {/* Left Side (Top) - Title, Styles */}
        <div>
          <h2 className="dynamicPageHeading">{name}</h2>
          <p className="space-x-2 sm:space-x-4 mb-4 mt-1">
            {stylesOffered.map((style) => (
              <span key={v4()} className="text-gray-700 font-serif">
                <span className="hidden sm:inline-block">·</span> {style}{" "}
                <span>·</span>
              </span>
            ))}
          </p>
        </div>

        {/* Right Side (Top) - User Photo w/ Badge */}
        <div className="relative">
          {/* Photo */}
          <Image
            src="https://source.unsplash.com/150x150/?face,man"
            height={50}
            width={50}
            className="rounded-full"
          />

          {/* Badge */}
          <div className="absolute top-6 -right-1 z-20">
            <BadgeCheckIcon className="h-6 text-red-500" />
          </div>
        </div>
      </div>
      {/* Divider */}
      <hr className="mt-1 mb-6 sm:mb-8" />

      {/* Bot Content - Features */}
      <ul className="space-y-4 sm:space-y-6">
        {featuresWithIcons.map((feature) => (
          <li key={v4()} className="flex items-center">
            <feature.icon className="h-5 sm:h-7 text-gray-500 pr-5" />
            <p className="flex flex-col">
              <span className="font-semibold">{feature.feature}</span>
              <span className="text-gray-700 text-xs sm:text-base">
                {feature.description}
              </span>
            </p>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <hr className="spacedHR" />
    </section>
  );
};

export default GymFeatures;
