import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  h4 {
    font-weight: normal;
    color: ${props => props.theme.colors.secundary};
  }
`;

export const Footer: React.FC = () => {
  return (
    <Container>
      <h4>Developed by Gustavo Silva Kuhl de Oliveira</h4>
      <p>PIX: gustavo.dev92@gmail.com</p>
      ©All rights reserved
    </Container>
  );
};
