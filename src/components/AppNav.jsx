import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

{
  /* Instead of managing state in order to see which tab is active, 
  we use NAVLINK which provides .active on it's own! therefore it can't be styled 
  in any way I want!

    NAVIGATION is ALWAYS managed with router, instead of useState
  */
}
function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
