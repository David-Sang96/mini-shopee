import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "../store/itemContext";

const NavBar = () => {
  const { items } = useContext(ItemContext);
  const total = items.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  return (
    <nav className="flex justify-between items-center p-3 backdrop-blur-sm sticky top-0 z-20 ">
      <h2 className="uppercase font-bold text-2xl text-[#3d5af1] md:text-4xl">
        Shoppee
      </h2>
      <Link to={"/cart"}>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Cart ( {total} )
          </span>
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
