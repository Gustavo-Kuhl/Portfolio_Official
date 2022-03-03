import React from "react";
import { Container, H2 } from "./styles";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";

export const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <H2>What’s Next?</H2>
      <h2 className="get-in-touch">Get in Touch</h2>
      <p>
        I’m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>
      <div className="links">
        <a href="https://github.com/Gustavo-Kuhl" target="_blank">
          <img src={github} alt="github logo" />
        </a>

        <a href="https://www.linkedin.com/in/gustavo-kuhl/" target="_blank">
          <img src={linkedin} alt="linkedin logo" />
        </a>
      </div>
      <div className="hello">
        <a href="mailto:gustavo.dev92@gmail.com">Say Hello</a>
      </div>
    </Container>
  );
};
