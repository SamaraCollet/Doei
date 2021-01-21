import styled from "styled-components";

export const Container = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    padding: 10px 0;
  }
  p {
    font-size: 20px;
    padding: 5px 0;
  }

  .link {
    color: #148cee;
  }

  .big {
    font-size: 3rem;
    color: #148cee;
    font-weight: bold;
  }

  @media only screen and (max-width: 767px) {
    width: 90%;
    padding: 0 5%;
    h1 {
      font-size: 1.5rem;
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`;