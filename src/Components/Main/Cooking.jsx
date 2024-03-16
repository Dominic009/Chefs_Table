
const Cooking = () => {

    // const {recipe_name, preparation_time, calories} = recipe;

    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold text-white mb-2">Cooking on progress : 0</h1>
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
                   
                  </tbody>
                </table>
                <br />
              </div>
            </div>
        </div>
    );
    
};

export default Cooking;