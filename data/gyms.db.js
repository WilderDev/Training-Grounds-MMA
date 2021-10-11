import { connectToDatabase } from "../utils/mongo.helpers";

export async function getAllActiveGyms() {
  try {
    const { db } = await connectToDatabase();
    const allGyms = await db.collection("Active").find({}).toArray();
    return allGyms;
  } catch (err) {
    console.error("ERROR:", err);
  }
}
