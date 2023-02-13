import { useState } from "react";
import { SigninJSX } from "../modal/signin/signin";
import { SignupJSX } from "../modal/signin/signup";
import "./style.scss";
export function EntrProfile() {
  const [active, setActive] = useState(false);
  const [reg, setReg] = useState(false);
  return (
    <div>
      <button
        className="header__btn-main-enter btn-hov01"
        id="btnMainEnter"
        onClick={() => setActive(true)}
      >
        Вход в личный кабинет
      </button>
      <div className="wrapper_mod">
        <SigninJSX
          reg={reg}
          setReg={setReg}
          active={active}
          setActive={setActive}
        />

        <SignupJSX reg={reg} setReg={setReg} />
      </div>
    </div>
  );
}
