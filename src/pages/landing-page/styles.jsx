import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 22px;
  }

  p {
    font-size: 20px;
    line-height: 145%;
  }
  @media (min-width: 768px) and (max-width: 979px) {
    h3 {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 767px) {
    h2 {
      font-size: 30px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 26px;
      margin: 0 5px;
      text-align: center;
    }
  }

  @media (max-width: 280px) {
    h2 {
      font-size: 28px;
    }
  }
`;

// @media (max-width: 1200px) {}
// @media (min-width:768px) and (max-width:979px) {}
// @media only screen and (max-width: 767px) {}
// @media (max-width: 480px) {}
