
import { NavLink } from "react-router-dom";
import "./style.scss";
export function Card({ element }) {
  let ar = "article";
//   if (element.user_id === data.user.id) {
//     ar = "my_article";
//   }
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__image">
          <NavLink to={`/${ar}/${element.id}`}>
            {element.images[0] ? (
              <img
                src={`http://localhost:8090/${element.images[0]["url"]}`}
                alt="picture"
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/not_photos.jpg"}
                alt="Фотография отсутствует"
              />
            )}
          </NavLink>
        </div>
        <div className="card__content">
          <NavLink to={`/${ar}/${element.id}`}>
            <h3 className="card__title">{element.title}</h3>
          </NavLink>
          <p className="card__price">{element.price}&nbsp;₽</p>
          <p className="card__place">Санкт Петербург</p>
          <p className="card__date">Сегодня в&nbsp;10:45</p>
        </div>
      </div>
    </div>
  );
}
