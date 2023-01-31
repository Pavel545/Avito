import { Card } from "../../components/card/card";
import { Footer } from "../../components/footer/footer";
import { Logo } from "../../components/logo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import "./main.scss";
import { allCard } from "../../store/actions/thunk/todo";
import { todosSelector } from "../../store/selectors/todo";
import { EntrProfile } from "../../components/entrance_profile";

export function Main() {
  const filter = useRef(null);
  const [mass, setMass] = useState(null);
  const [value, setValue] = useState("");

  const data = useSelector(todosSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (mass === null) {
      dispatch(allCard());
    }

    setMass(data.all);
  }, [data]);
  if (mass === null) {
    return "Loading...";
  }

  return (
    <div className="wrapper">
      <div className="container">
        <header className="header">
          <nav className="header__nav">
           <EntrProfile/>
          </nav>
        </header>
        <main className="main">
          <div className="main__search search">
            <Logo />

            <div className="search__form">
              <input
                ref={filter}
                onChange={(event) => setValue(event.target.value)}
                className="search__text"
                type="search"
                placeholder="Поиск по объявлениям"
                name="search"
              />
              <input
                className="search__text-mob"
                type="search"
                placeholder="Поиск"
                name="search-mob"
              />
              <button className="search__btn btn-hov02">Найти</button>
            </div>
          </div>
          <div className="main__container">
            <h2 className="main__h2">Объявления</h2>

            <div className="main__content">
              <div className="content__cards cards">
                {data.all[0] ? <Gallery mass={mass} value={value} /> : ""}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
const Gallery = ({ value, mass }) => {
  const filterMass = mass.filter((element) => {
    return element.title.toLowerCase().includes(value.toLowerCase());
  });
  return filterMass.map((element, id) => <Card key={id} element={element} />);
};
