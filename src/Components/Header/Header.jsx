import Logo from "../../assets/Logo/logo.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div>
        <img src={Logo} className="w-52"/>
      </div>

      <div>
        <ul className="flex gap-8 text-gray-300 cursor-pointer -mr-[35px]">
          <li className="hover:text-white hover:scale-110">Home</li>
          <li className="hover:text-white hover:scale-110">Recipes</li>
          <li className="hover:text-white hover:scale-110">About</li>
          <li className="hover:text-white hover:scale-110">Search</li>
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center relative">
          <input className="px-7 py-1 rounded-2xl outline-none opacity-85 hover:opacity-100" type= "text" placeholder="Search" />
          <IoIosSearch className="absolute left-2 scale-110 text-gray-500" />
        </div>

        <div className="bg-white rounded-full p-3 cursor-pointer">
          <FaRegUserCircle className="scale-150 text-[#068f56]"></FaRegUserCircle>
        </div>
      </div>
    </div>
  );
};

export default Header;
