import styled from "styled-components";

export const Container = styled.section`
  text-align: center;
  margin: 150px;

  .get-in-touch {
    font-size: 4rem;
  }

  p {
    width: 500px;
    font-size: 1.2rem;
    margin-bottom: 4rem;
  }

  .links {
    margin: 2rem;

    img {
      transition: ease-in-out .2s;
    }

    img:hover {
      transform: translateY(-5px);
    }
  }

  .hello>a {
   
      padding: 1.25rem 5rem;
      border: 1px solid ${(props) => props.theme.colors.secundary};
      border-radius: 0.5rem;
      font-size: 1.2rem;
      background-color: transparent;
    
  }

  @media (max-width: 768px) {
    p {
      width: 300px;
    }
  }
`;

export const H2 = styled.h2`
  font-weight: normal;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.secundary};
`;
