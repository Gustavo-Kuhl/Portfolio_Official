import React from "react";
import { Container, H2, List, ListItem } from "./styles";
import disney from "../../../assets/disney-plus.png";
import github from "../../../assets/github.svg";
import crypto from "../../../assets/crypto-conversor.png";

export const Projects: React.FC = () => {
  return (
    <Container id="projects">
      <H2>Projects</H2>
      <List>
        <ListItem side="right">
          <a href="https://gustavokuhl-disney-plus-clone.netlify.app/" target="_blank">
            <img src={disney} alt="" />
          </a>
          <div className="box">
            <span>Featured Project</span>
            <h3>Disney+ Clone</h3>
            <div className="description">
              <p>
                Disney plus clone (
                <a href="http://www.disneyplus.com" target="_blank">
                  www.disneyplus.com
                </a>
                ) created with The Movie Database API (
                <a href="https://www.themoviedb.org/" target="_blank">
                  https://www.themoviedb.org/
                </a>
                ).
              </p>
            </div>
            <a
              target="_blank"
              href="https://github.com/Gustavo-Kuhl/disney-plus-clone"
            >
              <img className="github" src={github} alt="github logo" />
            </a>
          </div>
        </ListItem>
        <ListItem side="left">
          <a
            href="https://gustavokuhl-cryptoconverter.netlify.app/"
            target="_blank"
          >
            <img src={crypto} alt="crypto converter screenshot" />
          </a>
          <div className="box">
            <span>Featured Project</span>
            <h3>Crypto Converter</h3>
            <div className="description">
              <p>
                The idea of this project was thinked because of blockchain's and
                cryptocurrency's fame. You just need to insert how many bitcoins
                you'd like to convert and then the application will make a
                connection with blockchain's API to get the cryptocurrency value
                to convert to brazilian real.
              </p>
            </div>
            <a
              target="_blank"
              href="https://github.com/Gustavo-Kuhl/Crypto_Converter"
            >
              <img className="github" src={github} alt="github logo" />
            </a>
          </div>
        </ListItem>
      </List>
    </Container>
  );
};
