import { useRouter } from "next/router";
import { v4 } from "uuid";
import GymInfoCard from "../../components/gyms/GymInfoCard";
import Layout from "../../components/layout/Layout";

const CategorySearch = ({ searchResults }) => {
  const router = useRouter();
  const { type } = router.query;
  return (
    <Layout>
      <Head>
        <title>{type} Training Camps | Training Grounds | MMA Gym Finder</title>
        <meta
          name="description"
          content="Find MMA gyms, groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA. Search page."
        />
      </Head>

      <section className="flex mb-24">
        <div className="flex-grow pt-14 px-6">
          {/* TOP */}
          <p className="text-xs">
            {/* 300+ Gyms ~ {range} ~{formattedNumFighters} */}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">{type} Gyms</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Gym</p>
            <p className="button">Price</p>
            <p className="button">Location</p>
            <p className="button">More Filters</p>
          </div>

          {/* RESULTS */}
          <div className="flex flex-col">
            {searchResults.map(
              ({
                title,
                description,
                img,
                location,
                lat,
                long,
                price,
                total,
                star,
              }) => (
                <GymInfoCard
                  key={v4()}
                  title={title}
                  desc={description}
                  img={img}
                  location={location}
                  lat={lat}
                  long={long}
                  price={price}
                  total={total}
                  star={star}
                />
              )
            )}
          </div>
        </div>

        {/* MAP */}
        {/* TSK: move it below everything on small */}
        <div className="hidden xl:inline-flex xl:min-w-[600px] max-h-[90vh] sticky top-24">
          <Map searchResults={searchResults} />
        </div>
      </section>
    </Layout>
  );
};

export default CategorySearch;

export async function getServerSideProps({ params }) {
  //   TSK: const searchResults = await fetcher("someMongoDB Dtabase");
  const searchResults = getAllGyms();
  // TSK: filter for top rated of type (search by type and sort by rating)

  return {
    props: {
      searchResults,
    },
  };
}
