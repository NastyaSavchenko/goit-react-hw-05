import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/movies"}>Movies</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
