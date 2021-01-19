import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 0;
  height: auto;
  background-color: #e8f1f2;

  .long-copy {
    width: 60%;
    padding-top: 15px;
    text-align: center;
  }

  @media (max-width: 1200px) {
    .long-copy {
      width: 70%;
      padding-top: 15px;
    }
  }

  @media (min-width: 768px) and (max-width: 979px) {
    .long-copy {
      width: 85%;
      padding-top: 15px;
    }
  }
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 35px 0;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Step = styled.div`
  text-align: left;
  width: 280px;
  margin: 34px;

  .icon {
    font-size: 50px;
    margin: 10px 10px 10px 0;
    color: #00bbf9;
  }

  h3 {
    margin-bottom: 18px;
  }

  p {
    line-height: 1.4;
  }

  .step-title {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

  @media (max-width: 1200px) {
    margin: 34px 1vw;
  }

  @media (min-width: 768px) and (max-width: 979px) {
    margin: 25px 2vw 22px 2vw;
    width: 29vw;
  }

  @media only screen and (max-width: 767px) {
    width: 65vw;
  }

  @media (max-width: 480px) {
    width: 70vw;
    h2 {
      margin: 2vw;
    }
  }
`;
