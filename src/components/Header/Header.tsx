import React, { useContext, useState } from "react";
import { HeaderContainer, Switcher } from "./styles";

import { ThemeContext } from "../../context/ThemeContext";
import { BurgerMenu } from "./BurgerMenu";

export const Header: React.FC = () => {
  const { switchTheme, setSwitchTheme } = useContext(ThemeContext);
  const [show, setShow] = useState<boolean>(false);

  return (
    <HeaderContainer show={show}>
      <BurgerMenu show={show} setShow={setShow} />
      <nav className="navbar">
        <ul className="list">
          <li className="list-item" onClick={() => setShow(false)}>
            <a href="#gustavo-kuhl">&lt;Gustavo Kuhl&gt;</a>
          </li>
          <li className="list-item" onClick={() => setShow(false)}>
            <a href="#about">About</a>
          </li>
          <li className="list-item" onClick={() => setShow(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li className="list-item" onClick={() => setShow(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Switcher onClick={() => setSwitchTheme(!switchTheme)} />
    </HeaderContainer>
  );
};
