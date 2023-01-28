import { Card } from "../../components/card/card";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header";
import { Logo } from "../../components/logo";
import "./sellerProfile.scss";

export function SellerProfile(params) {
  return (
    <div className="wrapper">
      <div className="container">
        <Header/>

        <main className="main">
          <div className="main__container">
            <div className="main__center-block">
              <div className="main__menu menu">
                <Logo/>
                <form className="menu__form" action="#">
                  <button className="menu__btn btn-hov02" id="btnGoBack">
                    Вернуться на&nbsp;главную
                  </button>
                </form>
              </div>

              <h2 className="main__h2">Профиль продавца</h2>

              <div className="main__profile-sell profile-sell">
                <div className="profile-sell__content">
                  <div className="profile-sell__seller seller">
                    <div className="seller__left">
                      <div className="seller__img">
                        <a href="" target="_self">
                          <img src="#" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="seller__right">
                      <h3 className="seller__title">Кирилл Матвеев</h3>
                      <p className="seller__city">Санкт-Петербург</p>
                      <p className="seller__inf">
                        Продает товары с августа 2021
                      </p>

                      <div className="seller__img-mob-block">
                        <div className="seller__img-mob">
                          <a href="" target="_self">
                            <img src="#" alt="" />
                          </a>
                        </div>
                      </div>

                      <button className="seller__btn btn-hov02">
                        Показать&nbsp;телефон
                        <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="main__title ">Товары продавца</h3>
            </div>
            <div className="main__content">
              <div className="content__cards cards">
                <Card />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
