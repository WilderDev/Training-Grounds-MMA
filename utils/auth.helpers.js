import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_AUTH_URI;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
let cachedClient = null;
let cachedDB = null;

if (!uri) throw new Error("Please deine the MONGODB_AUTH_URI Env-Var");

export async function connectToDatabase() {
  if (cachedClient && cachedDB) return { client: cachedClient, db: cachedDB };

  const client = await MongoClient.connect(uri, options);

  const db = client.db();

  cachedClient = client;
  cachedDB = db;

  return { client, db };
}
