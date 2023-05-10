import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>

<div className="flex justify-between items-center bg-red h-16 px-4 lg:px-20">
  <nav className="hidden lg:block">
    <ul className="flex justify-end items-center space-x-4">
      <li>
        <NavLink
          className="text-lg text-gray-900 hover:text-gray-300 font-semibold"
          exact
          to="/"
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-lg text-gray-900 hover:text-gray-300 font-semibold"
          to="/blogs"
        >
          BLOGS
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-lg text-gray-700 hover:text-gray-100 font-semibold"
          to="/register"
        >
          REGISTER
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-lg text-gray-900 hover:text-gray-300 font-semibold"
          to="/about"
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-lg text-gray-900 hover:text-gray-300 font-semibold"
          to='/addblog'
        >
          ADD-BLOK
        </NavLink>
      </li>
    </ul>
  </nav>
  <div className="flex items-center">
    <form className="flex items-center">
      <input
        className="w-full py-2 px-4 rounded-md bg-gray-100 text-gray-800 focus:bg-white focus:outline-none"
        type="text"
        placeholder="Search..."
      />
      <button
        className="py-2 px-4 bg-gray-900 text-white rounded-md ml-2 hover:bg-gray-800 focus:outline-none font-semibold"
        type="submit"
      >
        Search
      </button>
    </form>
  </div>
</div>

    
    </>
  );
};