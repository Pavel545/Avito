import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Card } from "../../components/card/card";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header";
import { Logo } from "../../components/logo";
import { allSeller } from "../../store/actions/thunk/todo";
import { todosSelector } from "../../store/selectors/todo";
import "./sellerProfile.scss";

export function SellerProfile() {
  const params = useParams();
  const data = useSelector(todosSelector);
  const dispatch = useDispatch();
  const [sel, setSel] = useState(undefined);
  const [chek, setChek] = useState();
  useEffect(() => {
    dispatch(allSeller());
    setSel(data.seller[params.id - 1]);
  }, [dispatch]);
  useEffect(() => {
    setSel(data.seller[params.id - 1]);
  }, [data]);
  if (!data.seller) {
    return "Loading...";
  }
  if (sel === undefined) {
    return "Loading...";
  }
  console.log(sel);
  return (
    <div className="wrapper">
      <div className="container">
        <Header />

        <main className="main">
          <div className="main__container">
            <div className="main__center-block">
              <div className="main__menu menu">
                <Logo />
                <div className="menu__form">
                  <button className="menu__btn btn-hov02" id="btnGoBack">
                    <Link style={{ color: "inherit" }} to="/">
                      Вернуться на главную
                    </Link>
                  </button>
                </div>
              </div>

              <h2 className="main__h2">Профиль продавца</h2>

              <div className="main__profile-sell profile-sell">
                <div className="profile-sell__content">
                  <div className="profile-sell__seller seller">
                    <div className="seller__left">
                      <div className="seller__img">
                        <a href="" target="_self">
                          <img
                            src={`http://localhost:8090/${sel.avatar}`}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="seller__right">
                      <h3 className="seller__title">{sel.name}</h3>
                      <p className="seller__city">{sel.city}</p>
                      <p className="seller__inf">Продает товары с {sel.sells_from}</p>

                      <div className="seller__img-mob-block">
                        <div className="seller__img-mob">
                          <a href="" target="_self">
                            <img src="#" alt="" />
                          </a>
                        </div>
                      </div>

                      <button
                        onClick={() => setChek(!chek)}
                        className="article__btn btn-hov02"
                      >
                        Показать телефон
                        {!chek ? (
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

        <Footer />
      </div>
    </div>
  );
}
