import { useEffect, useState } from "react";
import Items from "./Recipe items/Items";
import Que from "./Que";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cooking from "./Cooking";


const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [cook, setCook] = useState([]);
  const [cooking, setCooking] = useState([]);

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
    const cookingItem = cook.find((item) => item.recipe_id === id);
    if (cookingItem) {
      const updatedCook = cook.filter((item) => item.recipe_id !== id);
      setCook(updatedCook);
      setCooking([...cooking, cookingItem]);
  };

console.log(cooking)

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
            <Items
              key={recipe.recipe_id}
              recipe={recipe}
              handleWantToCook={handleWantToCook}></Items>
          ))}
        </div>

        {/* right side */}
        <div>
          <ToastContainer></ToastContainer>
          <div className="border rounded-xl w-[440px] p-3">
            <h1 className="text-2xl font-bold text-white mb-2">
              Ready to cook : {cook.length}
            </h1>

            <div>
              <div className="overflow-x-auto bg-white p-5 rounded-xl">
                <table className="table text-gray-500">
                  {/* head */}
                  <thead className="flex">
                    <tr className="flex justify-end gap-2 w-[80%] text-[16px]">
                      <th>Name</th>
                      <th>Time</th>
                      <th>Calories</th>
                    </tr>
                  </thead>
                  <tbody className="flex">
                    {/* row 1 */}
                    <tr className=" bg-gray-100 border border-green-400">
                      {/* <th>1</th> */}
                      {
                        cook.map((item, index) => <Que index={index} item={item} key={index}
                          handlePrepare={handlePrepare} handleCooking={handleCooking}></Que>)
                      }
                    </tr>
                  </tbody>
                </table>
                <br />
              </div>
            </div>
          </div>
          
          <div className="mt-7 border rounded-xl p-3">
          <div>
                <h1 className="text-2xl font-bold text-white mb-2">Cooking on progress : {cooking.length}</h1>
            </div>
             <div>
              <div className="overflow-x-auto bg-white p-5 rounded-xl">
                <table className="table text-gray-500">
                  {/* head */}
                  <thead className="flex">
                    <tr className="flex justify-end gap-2 w-[80%] text-[16px]">
                      <th>Name</th>
                      <th>Time</th>
                      <th>Calories</th>
                    </tr>
                  </thead>
                  <tbody className="flex">
                    {/* row 1 */}
                    <tr className=" bg-gray-100 border border-green-400">
                      {/* <th>1</th> */}
            
                    </tr>
                  </tbody>
                </table>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
