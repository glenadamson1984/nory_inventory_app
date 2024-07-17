import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchIngredients() {
      const response = await axios.get("/api/ingredients");
      setIngredients(response.data);
    }
    fetchIngredients();
  }, []);

  return (
    <>
      <h2 className="mb-4 text-xl font-semibold">Current Stock</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left border-b-2 border-gray-300">
              Name
            </th>
            <th className="px-6 py-3 text-left border-b-2 border-gray-300">
              Unit
            </th>
            <th className="px-6 py-3 text-left border-b-2 border-gray-300">
              Cost
            </th>
            <th className="px-6 py-3 text-left border-b-2 border-gray-300">
              Current Quantity
            </th>
          </tr>
        </thead>

        <tbody>
          {ingredients.map((ingredient) => (
            <tr key={ingredient.ingredient_id}>
              <td className="px-6 text-left"> {ingredient.name}</td>
              <td className="px-6 text-left">{ingredient.unit}</td>
              <td className="px-6 text-left">{ingredient.cost}</td>
              <td className="px-6 text-left">{ingredient.current_quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
