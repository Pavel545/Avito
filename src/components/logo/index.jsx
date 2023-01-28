export function Logo(params) {
  return (
    <div >
      <a className="search__logo-link" href="#" target="_blank">
        <img
          className="search__logo-img"
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="logo"
        />
      </a>
      <a className="search__logo-mob-link" href="#" target="_blank">
        <img
          className="search__logo-mob-img"
          src={process.env.PUBLIC_URL + "/logo-mob.png"}
          alt="logo"
        />
      </a>
    </div>
  );
}
