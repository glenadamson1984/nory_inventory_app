import { openDb } from "../../utils/database";

export default async function handler(req, res) {
  const db = await openDb();

  if (req.method === "POST") {
    const { ingredient_id, quantity } = req.body;
    await db.run(
      "UPDATE ingredients SET current_quantity = ? WHERE ingredient_id = ?",
      [quantity, ingredient_id]
    );
    res.status(200).json({ message: "adjusted" });
  } else {
    res.status(405);
  }
}
