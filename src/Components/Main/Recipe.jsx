import { useEffect, useState } from "react";
import Items from "./Recipe items/Items";
const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-white mb-3">Our Recipe</h1>
      <p className="text-gray-200 mb-3">
        It just doesnt look like mouth watering, it is! TO learn more about
        this, check out our <br /> new recipes and know the calories that you
        eat!
      </p>

      <div className="flex gap-4">
        {/* left side */}
        <div className="w-[70%] grid md:grid-cols-2 gap-4">
          {recipes.map((recipe) => (
            <Items key={recipe.recipe_id} recipe={recipe}></Items>
          ))}
        </div>

        {/* right side */}
        <div className="w-[40%] border border-red-500">
          <h1>Cooking section</h1>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
