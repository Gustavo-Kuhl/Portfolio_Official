import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  div {
    flex-wrap: wrap-reverse;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 400px;
  }

  h2 {
    font-weight: normal;
    font-size: 3rem;
    color: ${props => props.theme.colors.secundary};

    &::after {
      content: "";
      background-color: #aaa;
      width: 300px;
      height: 2px;
    }
  }

  span {
    color: ${props => props.theme.colors.secundary};
  }

  p {
    max-width: 500px;
    font-size: 1.2rem;
    word-spacing: 0.3rem;
  }

  .techs {
    font-size: 2rem;
    margin-top: 300px;
  }

  .techs-list {
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    user-select: none;

    img {
      width: 100px;
    }
   
    li {
      min-width: 200px;
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem;
      border-radius: .5rem;
      transition: .3s;
      padding: 3rem 1rem ;
      text-align: center;
      box-shadow: 0 0 5px 10px ${props => props.theme.colors.shadow1};

      &:hover {
        transform: scale(105%);
      }
    }

    @media (max-width: 1000px) {
     li {
       width: 100%;
     } 
    }
  }

  @media (max-width: 768px) {
   p {
     width: 300px;
   } 
  }
`;
