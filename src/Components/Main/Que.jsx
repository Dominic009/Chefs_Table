const Que = ({ item, index, handlePrepare }) => {
  return (
    <div>
        
      <div className="flex text-gray-500 hover:bg-green-300 hover:text-green-900 hover:font-semibold fira">
        <td className="flex justify-center items-center text-gray-600">{index+1}</td>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time} </td>
        <td>{item.calories}</td>

        <div className="mt-2 flex">
          <button onClick={() => handlePrepare(item.recipe_id)} className="btn bg-green-500 hover:bg-white hover:text-green-800 text-white scale-90 rounded-full">
            Prepare
          </button>
        </div>
      </div>
      <hr className=" border-b border-b-gray-200 w-[80%] mx-auto" />
    </div>
  );
};

export default Que;
