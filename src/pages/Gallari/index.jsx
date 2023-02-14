import { useEffect, useRef, useState } from "react";
import { Logo } from "../../components/Logo";
import "./style.scss";
import { Card } from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../../components/store/selectors/todo";
import { allCard } from "../../components/store/actions/thunk";

export function Gallari() {
  const dispatch = useDispatch();
  const data = useSelector(todosSelector);

 
  const filter = useRef(null);
  const [mass, setMass] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (mass === null) {
      dispatch(allCard());
      setMass(data.all);
    }
    setMass(data.all);

  }, [data,dispatch]);
  
  if (!data.all) {
    return <p>Loading...</p>;
  }
  return (
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
        </div>
      </div>
      <div className="main__container">
        <h2 className="main__h2">Объявления</h2>

        <div className="main__content_gall">
          <div className="content__cards cards">
            {data.all[0] ? <Gallery mass={mass} value={value} /> : ""}
          </div>
        </div>
      </div>
    </main>
  );
}
const Gallery = ({ value, mass }) => {
  if ((mass === null)||(mass === undefined)) {
    return<p>Loading...</p>;
  }
  const filterMass = mass.filter((element) => {
    return element.title.toLowerCase().includes(value.toLowerCase());
  });
  return filterMass.map((element, id) => <Card key={id} element={element} />);
};
