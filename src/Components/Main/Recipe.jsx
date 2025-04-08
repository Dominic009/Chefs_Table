import { useEffect, useState } from "react";
import Items from "./Recipe items/Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cooking from "./Cooking";
import WaitingQue from "./Right panel/WaitingQue";
import CookingQue from "./Right panel/CookingQue";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [cook, setCook] = useState([]);
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const notify = () => toast("Item alredy exists!");

  const handleWantToCook = (item) => {
    const isExist = cook.find((res) => res.recipe_id == item.recipe_id);
    if (!isExist) {
      setCook([...cook, item]);
    } else {
      notify();
    }
  };

  const handlePrepare = (id) => {
    const updatedCook = cook.filter((item) => item.recipe_id !== id);
    // const updateCurentList = currentList.find((item) => item.id !== id);
    if (updatedCook) {
      setCook(updatedCook);
      setCurrentList([...currentList, updatedCook]);
    } else {
    }
  };
  console.log(currentList)

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-white mb-3">Our Recipe</h1>
      <p className="text-gray-200 mb-8">
        It just doesnt look like mouth watering, it is! To learn more about
        this, check out our <br /> new recipes and know the calories that you
        eat!
      </p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {/* left side */}
        <div className="relative">
          <div className="sticky top-2">
            {/* Waiting que */}
            <WaitingQue cook={cook} handlePrepare={handlePrepare} />
            {/* Cooking que */}
            <CookingQue currentList={currentList} />
          </div>
        </div>

        {/* right side */}
        <div className="lg:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-9">
          {recipes.map((recipe) => (
            <Items
              key={recipe.recipe_id}
              recipe={recipe}
              handleWantToCook={handleWantToCook}
            ></Items>
          ))}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Recipe;
