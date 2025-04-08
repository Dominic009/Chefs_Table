import React from "react";

const CookingQue = ({ currentList }) => {
  const totalTime = currentList.reduce((acc, dish) => acc + parseInt(dish.preparing_time), 0);
  const totalCalories = currentList.reduce((acc, dish) => acc + parseInt(dish.calories), 0);

  return (
    <div className="mt-7 border rounded-xl p-3">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Cooking que : {currentList.length}
        </h1>
      </div>
      <div>
        <div className="overflow-x-auto bg-white md:p-5 rounded-xl">
          <table className="table w-full">
            <thead>
              <tr className="*:border-b font-bold text-[14px] text-gray-600 text-center">
                <th>SL</th>
                <th>Name</th>
                <th>Title</th>
                <th>Calories</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {currentList.map((dish, index) => (
                <tr className="bg-gray-100 border border-green-400 w-full h-full" key={dish.recipe_id}>
                  <td>{index + 1}</td>
                  <td>{dish.recipe_name}</td>
                  <td>{dish.preparing_time}</td>
                  <td>{dish.calories}</td>
                  <td>
                    <span className="bg-green-500 text-white rounded px-3 mr-2 flex items-center justify-center h-full">
                      Cooking
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </div>
        <div className="flex justify-between text-white mt-2">
          <p>Total cooking time: {totalTime} m</p>
          <p>Total calorie: {totalCalories} cal</p>
        </div>
      </div>
    </div>
  );
};

export default CookingQue;
