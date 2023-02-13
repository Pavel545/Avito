import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArticleCreate } from "../../../store/actions/thunk/todo";
import { todosSelector } from "../../../store/selectors/todo";
import "./addnewat.scss";
export function ArticleUp({ active, setActive }) {
  const data = useSelector(todosSelector);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);
  const image5 = useRef(null);

  const dispatch = useDispatch();
  const ArticleObj = {
    title: "string",
    description: "string",
    price: 0,
  };
  const Creation = (e) => {
    e.preventDefault();
    ArticleObj.title = e.target[0].value;
    ArticleObj.description = e.target[1].value;
    ArticleObj.price = e.target[7].value;

    console.log(ArticleObj);
    dispatch(
      ArticleCreate({
        obj: ArticleObj,
        access_token: data.tokens["access_token"],
      })
    );
  };
  const files = (e, ref) => {
    console.log(ref);

    console.log(e.target.files[0]);
    let f = e.target.files[0];
    if (f) {
      ref.current.src = URL.createObjectURL(f);
      localStorage.setItem("myImage", image1.src);
    }
  };
  console.log(image1);

  return (
    <div
      onClick={() => setActive(false)}
      className={active ? "wrapper_modal active" : "wrapper_modal"}
    >
      <div className="container-bg">
        <div onClick={(e) => e.stopPropagation()} className="modal__block">
          <div className="modal__content">
            <h3 className="modal__title">Новое объявление</h3>
            <div className="modal__btn-close">
              <div
                onClick={() => setActive(false)}
                className="modal__btn-close-line"
              ></div>
            </div>
            <form
              onSubmit={(e) => Creation(e)}
              className="modal__form-newArt form-newArt"
              id="formNewArt"
              action="#"
            >
              <div className="form-newArt__block">
                <label for="name">Название</label>
                <input
                  minLength="2"
                  required
                  className="form-newArt__input"
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                />
              </div>
              <div className="form-newArt__block">
                <label for="text">Описание</label>
                <textarea
                  minLength="3"
                  required
                  className="form-newArt__area"
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                ></textarea>
              </div>
              <div className="form-newArt__block">
                <p className="form-newArt__p">
                  Фотографии товара<span>не более 5 фотографий</span>
                </p>
                <div className="form-newArt__bar-img">
                  <div className="form-newArt__img">
                    <img ref={image1} src="" alt="" />
                    <input
                      className="input_file"
                      onChange={(e) => files(e, image1)}
                      type="file"
                    />
                    <div className="form-newArt__img-cover"></div>
                  </div>
                  <div className="form-newArt__img">
                    <img className="image_in" ref={image2} src="" alt="" />
                    <input
                      className="input_file"
                      onChange={(e) => files(e, image2)}
                      type="file"
                    />
                    <div className="form-newArt__img-cover"></div>
                  </div>
                  <div className="form-newArt__img">
                    <img className="image_in" ref={image3} src="" alt="" />
                    <input
                      className="input_file"
                      onChange={(e) => files(e, image3)}
                      type="file"
                    />
                    <div className="form-newArt__img-cover"></div>
                  </div>
                  <div className="form-newArt__img">
                    <img className="image_in" ref={image4} src="" alt="" />
                    <input
                      className="input_file"
                      onChange={(e) => files(e, image4)}
                      type="file"
                    />
                    <div className="form-newArt__img-cover"></div>
                  </div>
                  <div className="form-newArt__img">
                    <img className="image_in" ref={image5} src="" alt="" />
                    <input
                      className="input_file"
                      onChange={(e) => files(e, image5)}
                      type="file"
                    />
                    <div className="form-newArt__img-cover"></div>
                  </div>
                </div>
              </div>
              <div className="form-newArt__block block-price">
                <label for="price">Цена</label>
                <input
                  required
                  className="form-newArt__input-price"
                  type="text"
                  name="price"
                  id="formName"
                />
                <div className="form-newArt__input-price-cover"></div>
              </div>

              <button
                className="form-newArt__btn-pub btn-hov02"
                id="btnPublish"
              >
                Опубликовать
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
