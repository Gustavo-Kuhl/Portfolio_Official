import styled from "styled-components";

interface Props {
  show: boolean;
}

export const HeaderContainer = styled.header<Props>`
  display: flex;
  align-items: center;
  padding: 0.2rem 4rem;
  justify-content: space-between;
  transition: 0.2s ease-in-out;
  background: ${(props) => props.theme.colors.background};
  z-index: 10;
  position: sticky;
  width: 100%;
  top: 0;

  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .4s;
  }

  .list-item {
    margin: 0 1rem;
    display: block;
  }

  a {
    user-select: none;
    position: relative;
    padding: 0.5rem;
  }

  a::before {
    content: "";
    background-color: ${(props) => props.theme.colors.secundary};
    height: 3px;
    width: 0;
    transition: ease-in-out 0.2s;
    border-radius: 0.4rem;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  a:hover::before {
    width: 100%;
  }

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.colors.shadow1};
    padding: 0;
    justify-content: flex-end;
    
    .navbar {
      display: ${(props) => (props.show ? "flex" : "none")};
    }

    .list {
      transition: .3s ease-in-out;
      transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
      width: 60%;
      background-color: ${(props) =>
        props.show ? props.theme.colors.shadow1 : ""};
      position: fixed;
      left: 0;
      top: 0;
      height: 100%;
      flex-flow: column nowrap;
      font-size: 1.4rem;
    }

    .list-item {
      margin-top: 2rem;
    }
  }
`;

export const Switcher = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.colors.secundary};
  margin: 1rem;
  cursor: pointer;
  animation: pulse 1s infinite;

  @keyframes pulse {
    0% {
      transform: rotate(0);
      box-shadow: 0 0 0 0 ${(props) => props.theme.colors.secundary};
    }
    50% {
      transform: rotate(360deg);
      box-shadow: 0 0 2px 2px ${(props) => props.theme.colors.secundary};
    }
    100% {
      transform: translateX(0);
    }
  }
`;
