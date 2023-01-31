import { useEffect } from "react";
import { UserToken } from "../../../store/actions/thunk/todo";

import { useDispatch } from "react-redux";
import "./signin.scss";
import { useRef } from "react";



export function SigninJSX({ active, setActive,reg,setReg }) {
  const log = useRef()
  const pass = useRef()


  let logPas =
    {
      "email": "user@example.com",
      "password": "string"
    }
  
  const dispatch = useDispatch();
  
  const logIn=(e)=>{
    e.preventDefault()
console.log('Отправка данных');
    logPas.email=log.current.value
    logPas.password=pass.current.value
    dispatch(UserToken(logPas));

  }
  return (
    <div
      onClick={() => setActive(false)}
      className={(active && !reg) ? "wrapper_modal active" : "wrapper_modal"}
    >
      <div className="container-enter">
        <div onClick={(e) => e.stopPropagation()} className="modal__block">
          <div className="modal__form-login">
            <form onSubmit={e=>logIn(e)} id="formLogIn" >
              <div className="modal__logo">
                <img
                  src={process.env.PUBLIC_URL + "/logo_modal.png"}
                  alt="logo"
                />
              </div>
              <input
                className="modal__input login"
                type="text"
                name="login"
                ref={log}
                placeholder="email"
                required
              />
              <input
                className="modal__input password"
                type="password"
                name="password"
                ref={pass}
                placeholder="Пароль"
                required
              />
              <button className="modal__btn-enter" id="btnEnter">
                <a>Войти</a>{" "}
              </button>
            </form>
            <button
              onClick={() => setReg(true)}
              className="modal__btn-signup"
              id="btnSignUp"
            >
              <a>Зарегистрироваться</a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
