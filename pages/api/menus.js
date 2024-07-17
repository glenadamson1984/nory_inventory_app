import { openDb } from "../../utils/database";

export default async function handler(req, res) {
  const db = await openDb();
  const { location_id } = req.query;

  console.log(location_id);

  if (req.method === "GET") {
    const menus = await db.all("SELECT * FROM menus WHERE location_id = ?", [
      location_id,
    ]);
    res.status(200).json(menus);
  } else {
    res.status(405);
  }
}
