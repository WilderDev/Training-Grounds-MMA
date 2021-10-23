import { StarIcon } from "@heroicons/react/solid";

const GymReviews = ({ reviews, rating }) => {
  return (
    <section className="responsive">
      <h2 className="dynamicPageHeading flex items-center">
        <StarIcon className="h-6 mt-1 mr-2 text-red-400" />
        {rating} from{" "}
        {reviews.length === 1 ? "1 review" : `${reviews.length} reviews`}
      </h2>

      <hr className="spacedHR" />
    </section>
  );
};

export default GymReviews;
