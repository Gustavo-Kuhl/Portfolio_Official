import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 3rem 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.text2};
  `;

export const Profile = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  height: 90vh;
  word-spacing: 0.2rem;

  span {
    font-weight: normal;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.secundary};
  }

  h1, h3 {
    font-weight: normal;
    font-size: 5rem;
    
  }

  img {
    width: 200px;
  }

  p {
    font-size: 1.2rem;
    min-width: 300px;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    h1, h3 {
      font-size: 2.5rem;
    }
  }

`;

export const Button = styled.a`
  margin: 5rem 0;
  max-width: 300px;
  display: block;
  font-size: 1.4rem;
  text-align: center;
  padding: 1rem;
  border: unset;
  transition: .2s;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.text2};
  background: ${(props) => props.theme.colors.secundary};

  &:hover {
    transform: scale(105%);
  }
`;