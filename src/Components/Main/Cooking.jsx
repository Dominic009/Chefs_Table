const Cooking = () => {


  return (
    <div>
      <div className="flex text-gray-500 hover:bg-green-300 hover:text-green-900 hover:font-semibold fira">
        <td className="flex justify-center items-center text-gray-600">
          {index + 1}
        </td>
        <td>{que}</td>
        <td>{que} </td>
        <td>{que}</td>

        <div className="mt-2 flex">
          <button
            className="btn bg-green-500 hover:bg-white hover:text-green-800 text-white scale-90 rounded-full"
          >
            Prepare
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cooking;
