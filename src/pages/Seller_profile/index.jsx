import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { BASE_URL } from "../../components/constants";
import { Logo } from "../../components/Logo";
import {
  allCardGalleri,
  allSeller,
} from "../../components/store/actions/creators/todo";
import { allCard } from "../../components/store/actions/thunk";
import { todosSelector } from "../../components/store/selectors/todo";
import "./style.scss";

export function SellerProfile() {
  const [state, setstate] = useState(false);
  const [sel, setSel] = useState(undefined);
  const dispatch = useDispatch();
  const data = useSelector(todosSelector);
  const params = useParams();
  const sellProf = () => async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/user/all`);
      dispatch(allSeller(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(allCard());
    dispatch(sellProf());
  }, [dispatch]);
  useEffect(() => {
    if (data.seller) {
      setSel(data.seller[params.id - 1]);
    }
  }, [data]);
  if (!data.seller) {
    return "Loading...";
  }
  if (sel === undefined) {
    return "Loading...";
  }
  return (
    <main className="main">
      <div className="main__container_sell">
        <div className="main__center-block">
          <div className="main__menu menu">
            <Logo />
            <div className="menu__form">
              <Link style={{ color: "inherit" }} to="/">
                <button className="menu__btn btn-hov02" id="btnGoBack">
                  Вернуться на главную
                </button>
              </Link>
            </div>
          </div>

          <h2 className="main__h2">Профиль продавца</h2>

          <div className="main__profile-sell profile-sell">
            <div className="profile-sell__content">
              <div className="profile-sell__seller seller">
                <div className="seller__left">
                  <div className="seller__img">
                    <a href="" target="_self">
                      <img src={`http://localhost:8090/${sel.avatar}`} alt="" />
                    </a>
                  </div>
                </div>
                <div className="seller__right">
                  <h3 className="seller__title">{sel.name}</h3>
                  <p className="seller__city">{sel.city}</p>
                  <p className="seller__inf">
                    Продает товары с {sel.sells_from}
                  </p>

                  <div className="seller__img-mob-block">
                    <div className="seller__img-mob">
                      <a href="" target="_self">
                        <img src="#" alt="" />
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => setstate(!state)}
                    className="article__btn btn-hov02"
                  >
                    Показать телефон
                    {!state ? (
                      <span> 8 905 XXX XX XX</span>
                    ) : (
                      <span>
                        {String(sel.phone).split(
                          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                        )}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h3 className="main__title ">Товары продавца</h3>
        </div>
        <div className="main__content">
          <div className="content__cards cards">
            {data.all.map((element, id) => {
              if (element.user.id === sel.id) {
                return <Card key={id} element={element} />;
              }
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
