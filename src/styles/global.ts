import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-width: 100%;
    height: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: "Poppins", "Roboto", sans-serif;
  }

  ::-webkit-scrollbar {
  width: 8px;
  }

  ::-webkit-scrollbar-track {
  background: ${(props) => props.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.colors.secundary};
  }


  ul {
    list-style: none;
  }

  a {
    color: ${(props) => props.theme.colors.text2};
    text-decoration: none;
  }
`;
