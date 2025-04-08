import React from "react";

const WaitingQue = ({ cook, handlePrepare }) => {
  return (
    <div className="border rounded-xl p-3">
      <h1 className="text-2xl font-bold text-white mb-2">
        Orders que : {cook.length}
      </h1>

      <div className="overflow-x-auto bg-white md:p-5 rounded-xl">
        <table className="table w-full">
          <thead>
            <tr className="*:border-b font-bold text-[14px] text-gray-600 text-center">
              <th>SL</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calorie</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {cook.map((item, index) => (
              <tr
                key={index}
                className="bg-gray-100 border border-green-400 text-center"
              >
                <td>{index + 1}</td>
                <td>{item.recipe_name}</td>
                <td>{item.preparing_time}</td>
                <td>{item.calories.split(" calories")}</td>
                <td>
                  <button
                    onClick={() => handlePrepare(item.recipe_id)}
                    className="px-3 py-1 bg-green-500 hover:bg-white hover:text-green-800 text-white scale-90 rounded-full"
                  >
                    Prepare
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {cook.length === 0 && (
          <h1 className="mt-5 font-bold text-gray-400">List is empty!</h1>
        )}
      </div>
    </div>
  );
};

export default WaitingQue;
