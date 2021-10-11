import { MongoClient } from "mongodb";

let uri = process.env.MONGODB_URI;
let cachedClient = null;
let cachedDB = null;

if (!uri) throw new Error("Please deine the MONGODB_URI Env-Var");

export async function connectToDatabase() {
  if (cachedClient && cachedDB) return { client: cachedClient, db: cachedDB };

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db();

  cachedClient = client;
  cachedDB = db;

  return { client, db };
}
