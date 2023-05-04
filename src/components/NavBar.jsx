import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
    <nav className="nav">
      <NavLink className={"navigation"} to={"/"}>HOME </NavLink>
      <NavLink className={"navigation"} to={"/blogs"}>BLOGS</NavLink>
      <NavLink className={"navigation"} to={"/register"}>REGISTER</NavLink>
      <NavLink className={"navigation"} to={"/about"}>ABOUT</NavLink>
    </nav>
    </>
  );
};

