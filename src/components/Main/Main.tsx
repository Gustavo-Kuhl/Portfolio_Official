import React from "react";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Projects } from "./Projects/Projects";
import { Button, Container, Profile } from "./styles";

export const Main: React.FC = () => {
  return (
    <Container>
      <Profile id="gustavo-kuhl">
        <span>Hi, my name is</span>
        <h1> Gustavo Kuhl.
          
        </h1>
        <h3>I build things for the web.</h3>
        <p>
          I’m a front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences.
        </p>
        <Button href="../assets/resume-Gustavo_Kuhl(EN).pdf" download="resume-Gustavo_Kuhl(EN).pdf">
         Resume
        </Button>
      </Profile>
      <About />
      <Projects />
      <Contact />
    </Container>
  );
};
