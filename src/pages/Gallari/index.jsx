import { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Logo } from "../../components/Logo";
import "./style.scss";
import { BASE_URL } from "../../components/constants/index";
import { Card } from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { allCardGalleri } from "../../components/store/actions/creators/todo";
import { todosSelector } from "../../components/store/selectors/todo";

export function Gallari() {
  const dispatch = useDispatch();
  const data = useSelector(todosSelector);

  const allCard = () => async (dispatch) => {
    console.log("Loading...");

    try {
      const { data } = await axios.get(`${BASE_URL}/ads`);
      dispatch(allCardGalleri(data));
    } catch (error) {
      console.log(error);
    }
  };
  const filter = useRef(null);
  const [mass, setMass] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (mass === null) {
      dispatch(allCard());
      setMass(data.all);
    }
    setMass(data.all);

    console.log(mass);
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
