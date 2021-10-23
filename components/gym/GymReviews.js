import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { v4 } from "uuid";
import { getMonthAndYear } from "../../utils/time.helpers";
import { useState } from "react";

const GymReviews = ({ reviews, rating }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const reviewsWithComment = reviews.filter((review) => review.has_comment);

  return (
    <section className="responsive">
      <h2 className="dynamicPageHeading flex items-center mb-8">
        <StarIcon className="h-6 mt-1 mr-2 text-red-400" />
        <span>
          {rating} from{" "}
          {reviews.length === 1 ? "1 review" : `${reviews.length} reviews`}
        </span>
      </h2>
      {/* Detailed Ratings */}

      {/* Reviews */}
      <div className="flex justify-between flex-col sm:flex-row">
        {reviewsWithComment?.slice(0, 5).map((review) => (
          <div key={v4()} className="w-5/12">
            {/* Top - Pic, Name, Date */}
            <div className="flex items-center">
              {/* Image */}
              <Image
                src={
                  review.user.profile_picture ||
                  "/icons/default_user_profile.png"
                }
                alt={review.user.firstName + "profile"}
                width={50}
                height={50}
                className="rounded-full"
              />

              {/* Info */}
              <div className="flex flex-col ml-4">
                <h3 className="font-semibold">
                  {review?.user?.firstName || "Anonymous"}
                </h3>
                <p className="text-gray-500 text-sm">
                  {getMonthAndYear(review.date_created)}
                </p>
              </div>
            </div>

            {/* Bot - Comment */}
            <p className="max-w-prose mt-4">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Show All Reviews Button */}
      {reviewsWithComment.length > 5 && (
        <button
          onClick={() => setShowAllReviews(!showAllReviews)}
          className="border border-gray-700 rounded-lg mt-6 px-6 py-2 shadow hover:bg-gray-100 hover:shadow-lg transition-all"
        >
          {showAllReviews
            ? "Hide"
            : `Show all ${reviewsWithComment.length} comments`}
        </button>
      )}

      <hr className="spacedHR" />
    </section>
  );
};

export default GymReviews;

// IX_TSK
// 1. When you add the more detailed rating object. . . display those as rating bars underneatht the title
// 2. The button should open up a modal with seperated reviews
// 3. Show/Hide transition
