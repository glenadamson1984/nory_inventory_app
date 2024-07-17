import { openDb } from "../../utils/database";

export default async function handler(req, res) {
  const db = await openDb();

  if (req.method === "GET") {
    const ingredients = await db.all("SELECT * FROM ingredients");
    res.status(200).json(ingredients);
  } else {
    res.status(405);
  }
}
