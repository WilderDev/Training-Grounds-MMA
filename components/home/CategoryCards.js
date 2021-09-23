import { v4 } from "uuid";
import CategoryCard from "./CategoryCard";

const CategoryCards = ({ data }) => {
  return (
    <section>
      <h2 className="text-4xl font-semibold py-8">Train Anywhere</h2>

      <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3">
        {data?.map((card) => (
          <CategoryCard cardData={card} key={v4()} />
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
