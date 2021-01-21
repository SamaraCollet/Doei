import styled from "styled-components";

export const StyledTitle = styled.h2`
  padding-top: 2rem;
  font-size: 2rem;
  text-align: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-content: center !important;
  align-items: center;

  .not-found {
    margin-top: 100px;
    font-size: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .not-found img {
    width: 70px;
    margin: 0 auto;
  }
  .link {
    margin-top: 10px;
    color: #148cee;
  }
`;

export const DetailTitle = styled.div`
  background-color: #00bbf9;
  width: 80px;
  height: 3px;
  margin: 15px;
  align-self: center;
`;
