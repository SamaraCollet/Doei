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
  }
`;

export const DetailTitle = styled.div`
  background-color: #00bbf9;
  width: 80px;
  height: 3px;
  margin: 15px;
  align-self: center;
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 35px 0;
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
`;
