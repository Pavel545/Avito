import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { todosSelector } from "../../store/selectors/todo";
import { EntrProfile } from "../entrance_profile";
import { LogReg } from "../modal/logReg";
import { ArticleUp } from "../modal/upArticle/addnewat";
import "./style.scss";
export function Header(params) {
  const [active, setActive] = useState(false);
  const data = useSelector(todosSelector);
  const none = () => {};
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
        {params.create ? (
          <button
            onClick={() => setActive(true)}
            className="header_no_main__btn-putAd btn-hov01"
          >
            Разместить объявление
          </button>
        ) : (
          none
        )}

        <EntrProfile />
      </nav>
      {data.user.id ? (
        <ArticleUp active={active} setActive={setActive} />
      ) : (
        none
      )}
    </header>
  );
}
