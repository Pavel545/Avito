import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/card/card";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header";
import { Logo } from "../../components/logo";
import { UserLoginin, UserPatch } from "../../store/actions/thunk/todo";
import { todosSelector } from "../../store/selectors/todo";
import "./profile.scss";

export function Profile() {
  const buttonRef=useRef(null)
  const data = useSelector(todosSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserLoginin(data.tokens["access_token"]));

  }, [dispatch]);
  const Patch ={}
  const PA = UserPatch({element:Patch,access_token: data.tokens["access_token"]})
  const Save =(element)=>{
    element.preventDefault()
    PA(dispatch);
    console.log(buttonRef.current)
    console.log(element.target)
  }
  const navigate =useNavigate()
  const goToHome =(e)=>{
    e.preventDefault()
    navigate("/")
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Header create="create" />
        <main className="main">
          <div className="main__container_prof">
            <div className="main__center-block">
              <div className="main__menu menu">
                <Logo />
                <form onChange={e=>goToHome(e)} className="menu__form" >
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
                          {data.user.avatar ? <img src={`http://localhost:8090/${data.user.avatar}`} alt="" />: <img src="#" alt="" />}
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
                      <form onSubmit={e=>Save(e)} className="settings__form" action="#">
                        <div className="settings__div">
                          <label for="fname">Имя</label>
                          <input
                            className="settings__f-name"
                            id="settings-fname"
                            name="fname"
                            type="text"
                            placeholder={data.user.name}
                            onChange={(e) => (Patch.name = e.target.value)}
                          />
                        </div>

                        <div className="settings__div">
                          <label for="lname">Фамилия</label>
                          <input
                            className="settings__l-name"
                            id="settings-lname"
                            name="lname"
                            type="text"
                            placeholder={data.user.surname}
                            onChange={(e) => (Patch.surname = e.target.value)}

                          />
                        </div>

                        <div className="settings__div">
                          <label for="city">Город</label>
                          <input
                            className="settings__city"
                            id="settings-city"
                            name="city"
                            type="text"
                            placeholder={data.user.city}
                            onChange={(e) => (Patch.city = e.target.value)}

                          />
                        </div>

                        <div className="settings__div">
                          <label for="phone">Телефон</label>
                          <input
                            className="settings__phone"
                            id="settings-phone"
                            name="phone"
                            type="tel"
                            placeholder={data.user.phone}
                            onChange={(e) => (Patch.phone = e.target.value)}

                          />
                        </div>

                        <button
                          className="settings__btn btn-hov02"
                          id="settings-btn"
                          ref={buttonRef}
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
            <div className="main__content_profile">
              <div className="content__cards cards">
              {data.all.map((element, id) => {
                  if (element.user.id === data.user.id) {
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
