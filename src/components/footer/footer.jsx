import "./footer.scss";

export function Footer(params) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__img">
          <a href="" target="_self">
            <img src={process.env.PUBLIC_URL + "/icon_01.png"} alt="home" />
          </a>
        </div>
        <div className="footer__img">
          <a href="" target="_self">
            <img src={process.env.PUBLIC_URL + "/icon_02.png"} alt="home" />
          </a>
        </div>
        <div className="footer__img">
          <a href="" target="_self">
            <img src={process.env.PUBLIC_URL + "/icon_03.png"} alt="home" />
          </a>
        </div>
      </div>
    </footer>
  );
}
