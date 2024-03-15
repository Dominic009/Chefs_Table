import Logo from "../../assets/Logo/logo.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="" />
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Search</li>
        </ul>
      </div>

      <div>
        <div>
          <IoIosSearch />
          <input type="text" placeholder="Search" />
        </div>
        
        <div>
          <FaRegUserCircle></FaRegUserCircle>
        </div>
      </div>
    </div>
  );
};

export default Header;
