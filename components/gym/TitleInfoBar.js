import { BadgeCheckIcon, StarIcon } from "@heroicons/react/solid";
import { HeartIcon, ShareIcon } from "@heroicons/react/outline";

const TitleInfoBar = ({ title, location, numReviews, rating }) => {
  const { city, state, country } = location;

  return (
    <section className="px-6 sm:px-0 order-3">
      <h1 className="font-bold text-3xl text-gray-800">{title}</h1>

      {/* Bottom Bar */}
      <div className="flex justify-between mt-1">
        {/* Left - Reviews, Badges, Location */}
        <div className="flex items-center flex-wrap space-y-1 sm:space-y-0 mt-1 space-x-3">
          {/* Reviews */}
          <div className="flex">
            <p className="flex items-center font-semibold">
              <StarIcon className="h-5 text-red-400" />
              {rating}
            </p>
            <button
              type="button"
              aria-expanded="false"
              className="text-gray-600 pl-1 underline"
            >
              (
              {numReviews === 1
                ? `${numReviews} review`
                : `${numReviews} reviews`}
              )
            </button>
          </div>

          <span aria-hidden="true">·</span>

          {/* Badges */}
          <p className="flex items-center text-gray-500">
            <BadgeCheckIcon className="h-5 text-red-400 pr-1" />
            Verified
          </p>

          <span aria-hidden="true">·</span>

          {/* Location */}
          <button
            type="button"
            aria-expanded="false"
            className="text-gray-500 font-semibold  text-sm underline"
          >
            {city},{state && ` ${state},`} {country}
          </button>
        </div>

        {/* Right - Share & Save */}
        <div className="hidden sm:flex">
          {/* Share */}
          <button className="flex items-center underline font-semibold font-sm text-gray-700 hover:bg-gray-200 rounded-lg p-2">
            <ShareIcon className="h-5 pr-2" />
            Share
          </button>

          {/* Save */}
          <button className="flex items-center underline font-semibold font-sm text-gray-700 hover:bg-gray-200 rounded-lg p-2">
            <HeartIcon className="h-5 pr-2" />
            Save
          </button>
        </div>
      </div>
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
// 6. Share and Save buttons should go in nav on mobile screen
