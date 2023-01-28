

export function Header(params) {
    return(
        <header className="header">
                <nav className="header__nav">
                    <div className="header__logo logo-mob">
                        <a className="logo-mob__link" href="" target="_blank">
                            <img className="logo-mob__img" src={process.env.PUBLIC_URL + "/logo-mob.png"}  alt="logo"/>
                        </a>
                    </div>
                    <button className="header__btn-putAd btn-hov01" id="btputAd">Разместить объявление</button>
                    <button className="header__btn-lk btn-hov01" id="btnlk">Личный кабинет</button>
                </nav>
            </header>
    )
}