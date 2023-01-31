import "./signin.scss";
import "./signup.scss";

export function SignupJSX({ reg, setReg }) {
  console.log(reg);
    const Register={
        "password": "string",
        "role": "user",
        "email": "user@example.com",
        "name": "string",
        "surname": "string",
        "phone": "string",
        "city": "string",
        "id": 0
      }
      const RegUp=()=>{
        console.log(Register);
      }
  return (
    <div
      onClick={() => setReg(false)}
      className={reg ? "wrapper_modal active" : "wrapper_modal"}
    >
      <div className="container-signup">
        <div onClick={(e) => e.stopPropagation()} className="modal__block">
          <form onSubmit={e=>e.preventDefault()} className="modal__form-login" id="formLogUp" action="#">
            <div className="modal__logo">
              <img
                src={process.env.PUBLIC_URL + "/logo_modal.png"}
                alt="logo"
              />
            </div>
            <input
              required
              className="modal__input login"
              type="text"
              name="login"
              id="loginReg"
              placeholder="email"
              onChange={e=>Register.email=e.target.value}
            />
            <input
              required
              className="modal__input password-first"
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
              onChange={e=>Register.password=e.target.value}
            />
            <input
              required
              className="modal__input password-double"
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
            />
            <input
              className="modal__input first-name"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
              onChange={e=>Register.name=e.target.value}
            />
            <input
              className="modal__input first-last"
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
              onChange={e=>Register.surname=e.target.value}
            />
            <input
              className="modal__input city"
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
              onChange={e=>Register.city=e.target.value}
            />
            <button onClick={RegUp} className="modal__btn-signup-ent" id="SignUpEnter">
              <a>Зарегистрироваться</a>{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
