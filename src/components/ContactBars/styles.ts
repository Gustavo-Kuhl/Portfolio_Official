import styled from "styled-components";

export const LeftContainer = styled.div`
  position: fixed;
  left: 30px;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 40px;
    margin-top: 1rem;
    transition: ease 0.4s;

    &:hover {
      transform: translateY(-5px);
    }
  }

  &::after {
    content: "";
    display: block;
    width: 2px;
    height: 70px;
    background-color: ${(props) => props.theme.colors.text};
    margin-top: 2rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  position: fixed;
  right: 30px;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    writing-mode: vertical-rl;
    position: relative;
    padding: .2rem;
    font-size: 1.2rem;
    z-index: 1;
    color: ${(props) => props.theme.colors.text2};

    &::before {
      content: "";
      background-color: ${props => props.theme.colors.secundary};
      width: 100%;
      border-radius: .4rem;
      height: 0;
      z-index: -1;
      transition: .4s;
      position: absolute;
      top: 0;
      left: 0;
    }

    &:hover::before {
      height: 100%;
    }
  }

  &::after {
    content: "";
    display: block;
    width: 2px;
    height: 70px;
    background-color: ${(props) => props.theme.colors.text};
    margin-top: 2rem;
  }

  @media (max-width: 600px) {
   display: none;
  }
`;
