import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header>
      <nav className={s.nav}>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? s.active : s.link)}
        >
          Home
        </NavLink>
        <NavLink
          to={"/movies"}
          className={({ isActive }) => (isActive ? s.active : s.link)}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
