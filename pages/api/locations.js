import { openDb } from "../../utils/database";

export default async function handler(req, res) {
  const db = await openDb();

  if (req.method === "GET") {
    const locations = await db.all("SELECT * FROM locations");
    res.status(200).json(locations);
  } else {
    res.status(405);
  }
}
