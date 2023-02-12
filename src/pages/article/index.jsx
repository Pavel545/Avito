import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header";
import { Logo } from "../../components/logo";
import { Commentsmodal } from "../../components/modal/comments";
import { allComments } from "../../store/actions/creators/todo";
import { certainCard } from "../../store/actions/thunk/todo";
import { todosSelector } from "../../store/selectors/todo";
import "./article.scss";

export function Article() {
  const params = useParams();
  const [cat,setCat]=useState(false)

  const [chek, setChek] = useState(false);
  const data = useSelector(todosSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(certainCard({ id: params.id }));
    dispatch(allComments({id:params.id}))
  }, [dispatch, params.id]);
  if (!data.current) {
    return "Loading...";
  }
  if (!data.current.user) {
    return "Loading...";
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Header />

        <main className="main">
          <div className="main__container">
            <div className="main__menu menu">
              <Logo />
              <div className="menu__form">
                <button className="menu__btn-serch btn-hov02" id="btnGoBack">
                  <Link style={{ color: "inherit" }} to="/">
                    Вернуться на главную
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="main__artic artic">
            <div className="artic__content article">
              <div className="article__left">
                <div className="article__fill-img">
                  <div className="article__img">
                    {data.current.images[0] ? (
                      <img
                        src={`http://localhost:8090/${data.current.images[0]["url"]}`}
                        alt=""
                      />
                    ) : (
                      <img src="" alt="Фотография отсутствует" />
                    )}
                  </div>
                  <div className="article__img-bar"></div>
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
                  <h3 className="article__title title">{data.current.title}</h3>
                  <div className="article__info">
                    <p className="article__date">
                      {new Date(data.current.created_on).toUTCString()}
                    </p>
                    <p className="article__city">{data.current.user.city}</p>
                      
                    <a onClick={()=>setCat(true)} className="article__link">23 отзыва</a>
                    {/* <Commentsmodal active={cat} setActive={setCat} /> */}
                  </div>
                  <p className="article__price">{data.current.price} ₽</p>
                  <button
                    onClick={() => setChek(!chek)}
                    className="article__btn btn-hov02"
                  >
                    Показать телефон
                    {!chek ? (
                      <span> 8 905 XXX XX XX</span>
                    ) : (
                      <span>
                        {String(data.current.user.phone).split(
                          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                        )}
                      </span>
                    )}
                  </button>
                  <div className="article__author author">
                    <div className="author__img">
                      <img
                        src={`http://localhost:8090/${data.current.user.avatar}`}
                        alt=""
                      />
                    </div>
                    <div className="author__cont">
                      <NavLink to={`/seller_profile/${data.current.user.id}`}>
                        <p className="author__name">{data.current.user.name}</p>
                      </NavLink>
                      <p className="author__about">
                        Продает товары с {data.current.user.sells_from}
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
              <p className="main__text">{data.current.description}</p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
