import { useState } from "react";
import { FaClock } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import Modal from "../../Modal/Modal";

const Items = ({ recipe, handleWantToCook }) => {
  const [modal, setModal] = useState(false);
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
      <div className="bg-white rounded-xl text-left hover:shadow-xl transition-all ease-in overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative">
            <img
              src={recipe_image}
              alt=""
              className="w-full bg-gray-900 rounded-l-xl h-full object-cover"
            />

            {/* Time and calorie */}
            <div className="flex flex-col justify-around bg-gradient-to-r from-black to-transparent px-3 py-1 text-gray-200/90 absolute bottom-0 text-sm rounded-bl-xl">
              <p className="flex items-center gap-2">
                <FaClock className="text-purple-600/80"></FaClock>
                {preparing_time}
              </p>
              <p className="flex items-center gap-2">
                <FaFire className="text-purple-600/80"></FaFire>
                {calories}
              </p>
            </div>
          </div>

          {/* Details section */}
          <div className="px-4 py-3 flex flex-col">
            <h1 className="text-xl font-bold">{recipe_name}</h1>
            <p className="fira text-gray-500">{short_description}</p>
            <hr className="my-3" />
            <div className="flex-grow flex justify-between mb-3 lg:mb-8">
              <div>
                <span>
                  Ingredients : <span>{ingredients.length}</span>
                </span>
              </div>
              {/* Button */}
              <div className="text-gray-500">
                {ingredients.length > 0 && (
                  <>
                    <button
                      onClick={() => setModal(true)}
                      className="text-sm bg-gray-300 px-1 rounded text-gray-500 hover:bg-gray-900 hover:text-white transition-all ease-in-out duration-300"
                    >
                      See list
                    </button>
                  </>
                )}
              </div>
            </div>

            <button
              onClick={() => handleWantToCook(recipe)}
              className="btn bg-green-500 text-white hover:text-green-500 w-full"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <Modal closeModal={() => setModal(false)}>
          {" "}
          <div>
            {" "}
            <h1 className="text-xl font-bold mb-8 underline underline-offset-1">
              {recipe_name}
            </h1>
            <div className="md:flex items-center gap-5">
              <img
                src={recipe_image}
                alt=""
                className="bg-gray-900 rounded-lg h-full object-cover"
              />

              <div className="text-left">
                {ingredients.map((ingredient, idx) => (
                  <li className="" key={idx}>
                    {ingredient.slice(0, 60)}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Items;
