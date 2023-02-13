import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import { BASE_URL } from "../../components/constants";
import { Logo } from "../../components/Logo";
import { cardWan } from "../../components/store/actions/creators/todo";
import { todosSelector } from "../../components/store/selectors/todo";
import "./style.scss";

export function Article() {
  const [images, setImages] = useState("");
  const [state, setstate] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const certainCard =
    ({ id }) =>
    async (dispatch) => {
      console.log("loading..");
      try {
        const { data } = await axios.get(`${BASE_URL}/ads/${id}`);

        dispatch(cardWan(data));
      } catch (error) {
        console.log(error);
      }
    };
  const data = useSelector(todosSelector);
  useEffect(() => {
    dispatch(certainCard({ id: params.id }));
    console.log("ww");
  }, [dispatch]);
  if (!data.card) {
    return <p>Loading...</p>;
  }
  if (!data.card.id) {
    return <p>Loading...</p>;
  }

  return (
    <main className="main">
      <div className="main__container">
        <div className="main__menu menu">
          <Logo />
          <form className="menu__form" action="#">
            <button className="menu__btn-serch btn-hov02" id="btnGoBack">
              Вернуться на главную
            </button>
          </form>
        </div>
      </div>

      <div className="main__artic artic">
        <div className="artic__content article">
          <div className="article__left">
            <div className="article__fill-img">
              <div className="article__img">
                {data.card.images[0] ? (
                  images === "" ? (
                    <img
                      src={`http://localhost:8090/${data.card.images[0]["url"]}`}
                      alt=""
                    />
                  ) : (
                    <img src={`http://localhost:8090/${images}`} alt="" />
                  )
                ) : (
                  <img
                    src={process.env.PUBLIC_URL + "/not_photos.jpg"}
                    alt="Фотография отсутствует"
                  />
                )}
              </div>
              <div className="article__img-bar">
                {data.card.images[0] ? (
                  data.card.images.map((element, id) => (
                    <div className="article__img-bar-div">
                      <img
                        key={id}
                        onClick={() => setImages(element["url"])}
                        src={`http://localhost:8090/${element["url"]}`}
                        alt=""
                      />
                    </div>
                  ))
                ) : (
                  <div />
                )}
              </div>
              <div className="article__img-bar-mob img-bar-mob">
                <div className="img-bar-mob__circle circle-active"></div>
                <div className="img-bar-mob__circle"></div>
                <div className="img-bar-mob__circle"></div>
                <div className="img-bar-mob__circle"></div>
                <div className="img-bar-mob__circle"></div>
              </div>
            </div>
          </div>
          <div className="article__right">
            <div className="article__block">
              <h3 className="article__title title">{data.card.title}</h3>
              <div className="article__info">
                <p className="article__date">
                  {new Date(data.card.created_on).toUTCString()}
                </p>
                <p className="article__city">{data.card.user.city}</p>

                {/* <a onClick={() => setstate(true)} className="article__link">
                      23 отзыва
                    </a> */}
              </div>
              <p className="article__price">{data.card.price} ₽</p>
              <button
                onClick={() => setstate(!state)}
                className="article__btn btn-hov02"
              >
                Показать телефон
                {!state ? (
                  <span> 8 905 XXX XX XX</span>
                ) : (
                  <span>
                    {String(data.card.user.phone).split(
                      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                    )}
                  </span>
                )}
              </button>
              <div className="article__author author">
                <div className="author__img">
                  <img
                    src={`http://localhost:8090/${data.card.user.avatar}`}
                    alt=""
                  />
                </div>
                <div className="author__cont">
                  <NavLink to={`/seller_profile/${data.card.user.id}`}>
                    <p className="author__name">{data.card.user.name}</p>
                  </NavLink>
                  <p className="author__about">
                    Продает товары с {data.card.user.sells_from}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main__container">
        <h3 className="main__title title">Описание товара</h3>
        <div className="main__content">
          <p className="main__text">{data.card.description}</p>
        </div>
      </div>
    </main>
  );
}
