import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/card/card";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header";
import { Logo } from "../../components/logo";
import { UserLoginin } from "../../store/actions/thunk/todo";
import { todosSelector } from "../../store/selectors/todo";
import "./profile.scss";

export function Profile() {
  const data = useSelector(todosSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserLoginin(data.tokens["access_token"]));

  }, [dispatch]);
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <main className="main">
          <div className="main__container">
            <div className="main__center-block">
              <div className="main__menu menu">
                <Logo />
                <form className="menu__form" action="#">
                  <button className="menu__btn btn-hov02" id="btnGoBack">
                    Вернуться на&nbsp;главную
                  </button>
                </form>
              </div>
              {data.user.name === "string" ? (
                <h2 className="main__h2">Здравствуйте, Аноним</h2>
              ) : (
                <h2 className="main__h2">Здравствуйте, {data.user.name}</h2>
              )}

              <div className="main__profile profile">
                <div className="profile__content">
                  <h3 className="profile__title title">Настройки профиля</h3>
                  <div className="profile__settings settings">
                    <div className="settings__left">
                      <div className="settings__img">
                        <a href="" target="_self">
                          <img src={`http://localhost:8090/${data.user.avatar[0]["url"]}`} alt="" />
                        </a>
                      </div>
                      <a
                        className="settings__change-photo"
                        href=""
                        target="_self"
                      >
                        Заменить
                      </a>
                    </div>
                    <div className="settings__right">
                      <form className="settings__form" action="#">
                        <div className="settings__div">
                          <label for="fname">Имя</label>
                          <input
                            className="settings__f-name"
                            id="settings-fname"
                            name="fname"
                            type="text"
                            value={data.user.name}
                            placeholder=""
                          />
                        </div>

                        <div className="settings__div">
                          <label for="lname">Фамилия</label>
                          <input
                            className="settings__l-name"
                            id="settings-lname"
                            name="lname"
                            type="text"
                            value={data.user.surname}
                            placeholder=""
                          />
                        </div>

                        <div className="settings__div">
                          <label for="city">Город</label>
                          <input
                            className="settings__city"
                            id="settings-city"
                            name="city"
                            type="text"
                            value={data.user.city}
                            placeholder=""
                          />
                        </div>

                        <div className="settings__div">
                          <label for="phone">Телефон</label>
                          <input
                            className="settings__phone"
                            id="settings-phone"
                            name="phone"
                            type="tel"
                            value={data.user.phone}
                            placeholder="+79161234567"
                          />
                        </div>

                        <button
                          className="settings__btn btn-hov02"
                          id="settings-btn"
                        >
                          Сохранить
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="main__title title">Мои товары</h3>
            </div>
            <div className="main__content">
              <div className="content__cards cards">
                {/* <Card key={id} element={element} />                  */}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
