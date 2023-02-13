import { NavLink } from "react-router-dom";
import "./style.scss"
export function Logo(params) {
  return (
    <div>
      <NavLink className="search__logo-link" to="/">
        <img
          className="search__logo-img"
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="logo"
        />
      </NavLink>
      <NavLink className="search__logo-mob-link" to="/">
        <img
          className="search__logo-mob-img"
          src={process.env.PUBLIC_URL + "/logo-mob.png"}
          alt="logo"
        />
      </NavLink>
    </div>
  );
}


