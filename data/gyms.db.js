import { connectToDatabase } from "../utils/mongo.helpers";
import { buildFilterByQuery } from "../utils/filter.helpers";

export async function getAllActiveGyms() {
  try {
    const { db } = await connectToDatabase();
    const allGyms = await db.collection("Active").find({}).toArray();
    return allGyms;
  } catch (err) {
    console.error("ERROR:", err);
  }
}

export async function getAllActiveGymsByQuery(query) {
  const filter = buildFilterByQuery(query);
  try {
    const { db } = await connectToDatabase();
    const allGymsByQuery = await db
      .collection("Active")
      .find({})
      .filter(filter)
      .toArray();

    return JSON.parse(JSON.stringify(allGymsByQuery));
  } catch (err) {
    console.error("ERROR:", err);
  }
}
