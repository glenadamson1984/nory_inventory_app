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
    <div>
      <h2 className="mb-4 text-xl font-semibold">Current Stock</h2>

      {ingredients.map((ingredient) => (
        <div key={ingredient.id} className="flex">
          <div className="flex flex-row">
            {ingredient.name}
            <div>{ingredient.unit}</div>
            <div>{ingredient.cost}</div>
            <div>{ingredient.current_quantity}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
