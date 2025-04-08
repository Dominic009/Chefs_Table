import React from "react";
import Cooking from "../Cooking";

const CookingQue = ({ currentList }) => {
  return (
    <div className="mt-7 border rounded-xl p-3">
      <div className="group">
        <h1 className="text-2xl font-bold text-white mb-2">
          Cooking que : {currentList.length}
        </h1>
      </div>
      <div className="">
        <div className="overflow-x-auto bg-white md:p-5 rounded-xl">
          <table className="table text-gray-500">
            {/* head */}
            <thead className="flex border">
              <tr className="flex md:justify-end md:gap-2 text-[16px]">
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody className="flex">
              {/* row 1 */}
              <tr className=" bg-gray-100 border border-green-400 w-full">
                {/* <th>1</th> */}
                {currentList.map((dish, index) => (
                  <Cooking key={index} dish={dish} index={index}></Cooking>
                ))}
              </tr>
            </tbody>
          </table>
          <br />
        </div>
        <div className="flex justify-between text-white mt-2">
          <p>Total cooking time : 0 m</p>
          <p>Total calorie : 0 cal</p>
        </div>
      </div>
    </div>
  );
};

export default CookingQue;
