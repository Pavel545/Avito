import { NavLink } from "react-router-dom";
import "./style.scss";


export function Header(params) {
  return (
    <header className="header_no_main">
      <nav className="header_no_main__nav">
        <div className="header_no_main__logo logo-mob">
        <NavLink className="logo-mob__link" to="/">
            <img
              className="logo-mob__img"
              src={process.env.PUBLIC_URL + "/logo-mob.png"}
              alt="logo"
            />
          </NavLink>
        </div>
        <button className="header_no_main__btn-lk btn-hov01" id="btnlk">
          Личный кабинет
        </button>
      </nav>
    </header>
  );
}