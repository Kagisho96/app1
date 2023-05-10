import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
    <nav className="bg-red h-6 in lg:inline-block w-full lg:mt-0">
      <NavLink className={"text-xl block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-grey mr-5"} to={"/"}>HOME </NavLink>
      <NavLink className={"text-xl block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-grey mr-5"} to={"/blogs"}>BLOGS</NavLink>
      <NavLink className={"text-xl block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-grey mr-5"} to={"/register"}>REGISTER</NavLink>
      <NavLink className={"text-xl block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-grey mr-5"} to={"/about"}>ABOUT</NavLink>
    </nav>

    
    </>
  );
};