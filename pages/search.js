import Head from "next/head";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Layout from "../components/layout/Layout";

const Search = () => {
  const router = useRouter();
  const { location, startDate, endDate, numFighters } = router.query;
  const formattedNumFighters =
    numFighters === "1" ? "1 Fighter" : `${numFighters} Fighters`;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  console.log("numFighters:", numFighters);

  return (
    <Layout placeholder={`${location} | ${range} | ${formattedNumFighters}`}>
      <Head>
        {/* TSK change to the search term */}
        <title>
          {location} Training Camps | Training Grounds | MMA Gym Finder
        </title>
        <meta
          name="description"
          content="Find MMA gyms, groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA. Search page."
        />
      </Head>

      <section className="flex">
        <div className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Gyms ~ {range} ~{formattedNumFighters}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Gyms in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Gym</p>
            <p className="button">Price</p>
            <p className="button">Location</p>
            <p className="button">More Filters</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Search;
