import React from "react";
import { LeftContainer } from "./styles";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

export const LeftBar: React.FC = () => {
  return (
    <LeftContainer>
      <a href="https://github.com/Gustavo-Kuhl" target="_blank">
        <img src={github} alt="github logo" />
      </a>

      <a href="https://www.linkedin.com/in/gustavo-kuhl/" target="_blank">
        <img src={linkedin} alt="linkedin logo" />
      </a>
    </LeftContainer>
  );
};
