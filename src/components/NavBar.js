
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <nav className="nav">
      <NavLink className={"navigation"} to={"/"}>Home </NavLink>
      <NavLink className={"navigation"} to={"/"}>Blogs</NavLink>
      <NavLink className={"navigation"} to={"/"}>Register</NavLink>
    </nav>
    </>
  );
};

export default NavBar;