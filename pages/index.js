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

  const handleStockChange = async (id, quantity) => {
    try {
      const numQuantity = Number(quantity);

      if (isNaN(numQuantity)) {
        alert("Please enter a valid number");
        return;
      }

      const updateResponse = await axios.post(
        "/api/updateQuantityOfIngredients",
        {
          ingredient_id: id,
          quantity: quantity,
        }
      );

      // if i had more time i would like to add a message or prompt to the ui just to show that things are working
      const response = await axios.get("/api/ingredients");
      setIngredients(response.data);
      alert(updateResponse?.data?.message || "stock updated");
    } catch (error) {
      alert("Error adjusting stock");
    }
  };

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
              <td className="px-6 text-left">
                <input
                  type="number"
                  className="border"
                  defaultValue={ingredient.current_quantity}
                  onChange={(e) =>
                    handleStockChange(ingredient.ingredient_id, e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
