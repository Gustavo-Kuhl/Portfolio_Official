import React from "react";
import styled from "styled-components";

const BurgerContainer = styled.div<{ show: boolean }>`
  padding: .2rem;
  display: none;
  cursor: pointer;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;

  div {
    width: 40px;
    height: 2px;
    background-color: #aaa;
    border-radius: 1rem;
    margin: .7rem;
    transition: all 0.2s linear;
    
    &:nth-child(1) {
      transform: ${({show}) => show ? "rotate(45deg)" : "rotate(0)"};
      transform-origin: 5px;
    }
    
    &:nth-child(2) {
      transform: ${({show}) => show ? "translateX(-100%)" : ""};
      opacity: ${({show}) => show ? "0" : "1"};
    }

    &:nth-child(3) {
      transform-origin: 2px;
      transform: ${({show}) => show ? "rotate(-45deg)" : "rotate(0)"};
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> = ({ show, setShow }) => {
  return (
    <BurgerContainer show={show} onClick={() => setShow(!show)}>
      <div></div>
      <div></div>
      <div></div>
    </BurgerContainer>
  );
};
