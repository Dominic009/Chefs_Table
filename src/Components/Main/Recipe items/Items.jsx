import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";



const Items = ({ recipe }) => {
  const {
    recipe_id,
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      {/* left side */}
      <div className=" rounded-xl p-5 border border-gray-200 text-left hover:scale-[103%] hover:shadow-xl transition-all ease-in cursor-pointer">
        <div className="*:mb-3 bg-white p-4 rounded-xl">
          <img src={recipe_image} alt="" />
          <h1 className="text-xl font-bold">{recipe_name}</h1>
          <p className="fira text-gray-500">{short_description}</p>
          <hr />
          <div className="mb-3">
            <span className="font-semibold mb-1">Ingredients :</span>{" "}
            <span>{ingredients.length}</span>
          </div>
          <div className="fira text-gray-500">
            {ingredients.map((ingredient) => (
              <li className="ml-3 mb-1" key={recipe_id}>
                {ingredient}
              </li>
            ))}
          </div>

          <hr />
          <div className="flex justify-around gap-5 text-gray-600">
            <p className="flex items-center gap-2"><IoMdTime></IoMdTime>{preparing_time}</p>
            <p className="flex items-center gap-2"><FaFire></FaFire>{calories}</p>
          </div>
          <button className="btn">Cook</button>
        </div>
      </div>
    </div>
  );
};

export default Items;
