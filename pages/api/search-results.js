import { buildFilterByQuery } from "../../utils/filter.helpers";
import { connectToDatabase } from "../../utils/mongo.helpers";
import { toTitleCases } from "../../utils/string.helpers";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { filters, sorts, location, numFighters } = req.body;
    const formattedLocation = location ? toTitleCases(location) : null;

    try {
      const { db } = await connectToDatabase();

      const filterQuery = {
        numFighters,
        location: formattedLocation,
        trainingModalities: filters.trainingModalities,
        priceTier: filters.priceRange,
        skillLevels: filters.skillLevels,
        accommodations: filters.accommodations,
        isFeatured: filters.isFeatured,
      };

      const dbQueryFilter = buildFilterByQuery(filterQuery);

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
