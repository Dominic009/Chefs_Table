const Cooking = ({dish, index}) => {

  const {recipe_name, preparing_time, calories} = dish;

  return (
    <div>
      <div className="flex text-gray-500 hover:bg-green-300 hover:text-green-900 hover:font-semibold fira items-center justify-between">
        <td className="flex justify-center items-center text-gray-600">{index + 1}
        </td>
        
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>

        <div className=" bg-green-500 text-white rounded px-3 h-5 mr-2">

           Cooking

        </div>
      </div>
      <hr className=" border-b border-b-gray-200 w-[80%] mx-auto" />
    </div>
  );
};

export default Cooking;
