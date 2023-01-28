import { Card } from "../../components/card/card";
import { Footer } from "../../components/footer/footer";
import { Logo } from "../../components/logo";
import "./main.scss";
export function Main() {
  return (
    <div className="wrapper">
      <div className="container">
        <header className="header">
          <nav className="header__nav">
            <button
              className="header__btn-main-enter btn-hov01"
              id="btnMainEnter"
            >
              Вход в личный кабинет
            </button>
          </nav>
        </header>
        <main className="main">
          <div className="main__search search">
            <Logo/>
            
            <form className="search__form" action="#">
              <input
                className="search__text"
                type="search"
                placeholder="Поиск по объявлениям"
                name="search"
              />
              <input
                className="search__text-mob"
                type="search"
                placeholder="Поиск"
                name="search-mob"
              />
              <button className="search__btn btn-hov02">Найти</button>
            </form>
          </div>
          <div className="main__container">
            <h2 className="main__h2">Объявления</h2>

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
