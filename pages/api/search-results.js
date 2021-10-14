import { buildFilterByQuery } from "../../utils/filter.helpers";
import { connectToDatabase } from "../../utils/mongo.helpers";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { filters, sorts } = req.body;
    console.log("filters:", filters);

    try {
      const { db } = await connectToDatabase();

      const filterQuery = {
        types: filters.gymFilters,
      };

      const dbQueryFilter = buildFilterByQuery(filterQuery);
      console.log("dbQueryFilter:", dbQueryFilter);
      const filteredGyms = await db
        .collection("Active")
        .find({})
        .filter(dbQueryFilter)
        .toArray();

      return res.status(201).json({
        message: "Success!",
        filterResults: filteredGyms,
      });
    } catch (err) {
      return res.status(500).json({ message: "Database Error" + err.message });
    }
  }
  // TSK
  return res.json(201);
};

export default handler;
