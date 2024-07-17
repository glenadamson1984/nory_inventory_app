import { useState, useEffect } from "react";
import axios from "axios";

export default function Sales() {
  const [locations, setLocations] = useState([]);
  const [menus, setMenus] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState("");

  useEffect(() => {
    async function fetchLocations() {
      const response = await axios.get("/api/locations");
      setLocations(response.data);
    }
    fetchLocations();
  }, []);

  useEffect(() => {
    async function fetchRecipes() {
      if (selectedLocation) {
        console.log("fetching recipes for location", selectedLocation);
        try {
          const response = await axios.get(
            `/api/menus?location_id=${selectedLocation}`
          );
          console.log(response.data.map((recipe) => recipe?.recipe_id));

          // ran out of time but what i needed to do was create a recipes endpoint to grab the names of the recipes/menu items
          // and then use these names to populate the setMenus

          // setMenus();
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      }
    }
    fetchRecipes();
  }, [selectedLocation]);

  return (
    <>
      <h2 className="mb-4 text-xl font-semibold">Record Sales</h2>
      <form
        onSubmit={() =>
          console.log(
            "record sale and minus each ingredient by 1 or return error"
          )
        }
        className="mb-8 space-y-4"
      >
        <div className="flex">
          <div>
            <label>Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              required
              className="w-full border"
            >
              <option value="">Select a location</option>
              {locations.map((location) => (
                <option key={location.location_id} value={location.location_id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Menus</label>
            <select
              value={selectedRecipe}
              onChange={(e) => setSelectedRecipe(e.target.value)}
              required
              className="w-full border"
            >
              <option value="">Select a recipe</option>
              {menus.map((recipe) => (
                <option key={recipe.recipe_id} value={recipe.recipe_id}>
                  {recipe.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button type="submit" className="text-white bg-blue-800 border ">
              Record Sale
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
