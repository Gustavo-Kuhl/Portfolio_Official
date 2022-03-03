import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 200px;
`;

export const H2 = styled.h2`
  position: relative;
  font-weight: normal;
  font-size: 3rem;
  margin: 3rem;
  color: ${props => props.theme.colors.secundary};

  &::after {
    content: '';
    background-color: ${props => props.theme.colors.primary};
    width: 420px;
    height: 1px;
    left: 200px;
    position: absolute;
    z-index: 0;
    top: 35px;
  }
`;

export const List = styled.ul`
  margin: 1rem;
`

export const ListItem = styled.li<{side: string}>`
  padding: 1rem;
  margin-bottom: 5rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: ${props => props.side === "right" ? "row" : "row-reverse"};
  
  img {
    width: 550px;
    border-radius: .5rem;
    transition: .3s;
    box-shadow: 0 0 15px 15px ${props => props.theme.colors.shadow2};

    &:hover {
      transform: translate(10px);
    }
  }
  
  .box {
    display: flex;
    flex-direction: column;
    align-items: ${props => props.side === "right" ? "flex-end" : "flex-start"};
    margin: 1rem 3rem;
  }

  .description {
    max-width: 300px;
    text-align: ${props => props.side === "right" ? "end" : "start"};
    color: ${props => props.theme.colors.text};
    position: relative;
    padding: 1rem;
    border-radius: .5rem;
    font-size: 1.1rem;
    background-color: ${props => props.theme.colors.shadow1};

    a {
      color: ${props => props.theme.colors.secundary};
      text-decoration: wavy;
    }
  }

  .github {
    width: 40px;
    margin-top: 2rem;

    &:hover {
      transform: translateY(-5px);
    }
  }

  h3 {
    font-size: 2rem;
    word-spacing: .5rem;
  }

  span {
    color: ${props => props.theme.colors.secundary}
  }

  @media (max-width: 1100px) {
    flex-direction: column;

    .box {
      align-items: center;
    }

    .description {
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 300px;
    }
  }
`