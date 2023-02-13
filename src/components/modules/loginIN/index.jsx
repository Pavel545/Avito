import "./style.scss";

export function LoginIN() {
  const logPas = {};
  const logIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="modal__form-login">
      <form onSubmit={(e) => logIn(e)} id="formLogIn">
        <div className="modal__logo">
          <img src={process.env.PUBLIC_URL + "/logo_modal.png"} alt="logo" />
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
        <button className="modal__btn-enter">
          <a>Войти</a>
        </button>
      </form>
      <button className="modal__btn-signup">
        <a>Зарегистрироваться</a>{" "}
      </button>
    </div>
  );
}
