import React from "react";
import { Container } from "./styles";
import profile from "../../../assets/profile.png";
import javascript from "../../../assets/javascript.svg";
import typescript from "../../../assets/typescript.svg";
import html from "../../../assets/html-5.svg";
import css from "../../../assets/css3.svg";
import git from "../../../assets/git.svg";
import mongodb from "../../../assets/mongodb.svg";
import node from "../../../assets/node-js.svg";
import react from "../../../assets/react.svg";
import firebase from "../../../assets/firebase.svg";
import styledComponents from "../../../assets/styled-components.svg";

export const About: React.FC = () => {
  return (
    <Container id="about">
      <h2>About me</h2>
      <div>
        <p>
          Hello! My name is <span>Gustavo</span> and I enjoy creating things
          that live on the internet. <span>Front-end developer</span>, but in
          love with mobile development. Every day I want to learn more about
          things that I love. I've got willing to work in a team because I
          believe that it is a great opportunity to share knowledge and
          different solutions for the same problem. One of the reasons I{" "}
          <span>love to develop</span> is that I can{" "}
          <span>create solutions to someone's problem</span> and makes people's
          lives easier.
        </p>

        <img src={profile} alt="" />
      </div>
      <h3 className="techs">Techs</h3>
      <ul className="techs-list">
        <li>
          JAVASCRIPT
          <img src={javascript} alt="javascript logo" />
        </li>
        <li>
          TYPESCRIPT
          <img src={typescript} alt="typescript logo" />
        </li>
        <li>
          GIT
          <img src={git} alt="git logo" />
        </li>
        <li>
          HTML
          <img src={html} alt="html logo" />
        </li>
        <li>
          CSS
          <img src={css} alt="css logo" />
        </li>
        <li>
          REACT.JS
          <img src={react} alt="react.js logo" />
        </li>
        <li>
          STYLED-COMPONENTS
          <img src={styledComponents} alt="styled components logo" />
        </li>
        <li>
          FIREBASE
          <img src={firebase} alt="firebase logo" />
        </li>
        <li>
          MONGODB
          <img src={mongodb} alt="mongodb logo" />
        </li>
        <li>
          NODE.JS
          <img src={node} alt="node.js logo" />
        </li>
      </ul>
    </Container>
  );
};
