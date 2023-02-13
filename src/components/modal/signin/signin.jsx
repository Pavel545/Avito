import { useEffect } from "react";
import { UserToken } from "../../../store/actions/thunk/todo";

import { useDispatch } from "react-redux";
import "./signin.scss";
import axios from "axios";
import { userRequestFailure, userTokensSuccess } from "../../../store/actions/creators/todo";
import { BASE_URL } from "../../../constants";
import { useNavigate } from "react-router-dom";



export function SigninJSX({ active, setActive,reg,setReg }) {
  const navigate =useNavigate()
 const UserToken = (logPas) => async (dispatch) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, logPas, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(userTokensSuccess(data));
      navigate("/profile")
    } catch (error) {
      dispatch(userRequestFailure(error));
    }
  };

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
              <button className="modal__btn-enter" >
                <a>Войти</a>{" "}
              </button>
            </form>
            <button
              onClick={() => setReg(true)}
              className="modal__btn-signup"
            >
              <a>Зарегистрироваться</a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
