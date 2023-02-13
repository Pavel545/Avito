import { Link } from "react-router-dom";
import "./style.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__img">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/icon_01.png"} alt="home" />
          </Link>
        </div>
        <div className="footer__img">
          <Link>
            <img src={process.env.PUBLIC_URL + "/icon_02.png"} alt="home" />
          </Link>
        </div>
        <div className="footer__img">
          <Link>
            <img src={process.env.PUBLIC_URL + "/icon_03.png"} alt="home" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
