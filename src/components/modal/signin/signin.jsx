import { useEffect } from "react";
import { UserToken } from "../../../store/actions/thunk/todo";

import { useDispatch } from "react-redux";
import "./signin.scss";



export function SigninJSX({ active, setActive,reg,setReg }) {


  let logPas =
    {
      email: "user@example.com",
      password: "string"
    }
  
  const dispatch = useDispatch();
  const loginIn = UserToken(logPas)
  const logIn=(e)=>{
    e.preventDefault()
    loginIn(dispatch);

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
                placeholder="email"
                required
                onChange={(e) => (logPas.email = e.target.value)}
              />
              <input
                className="modal__input password"
                type="password"
                name="password"
                placeholder="Пароль"
                required
                onChange={(e) => (logPas.password = e.target.value)}

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
