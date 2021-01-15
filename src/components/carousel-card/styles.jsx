import styled from "styled-components";

export const Card = styled.div`
  padding: 45px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  height: auto;

  .card-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .card-image {
    width: 150px;
    height: 150px;
    border: 3px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-image img {
    border-radius: 50%;
    width: 91%;
    height: 91%;
  }

  .card-info {
    padding-left: 30px;
    width: 500px;
  }

  .card-title {
    font-size: 150%;
  }

  .card-date {
    font-size: 95%;
    color: #3f3f3f;
  }

  .card-text {
    padding: 20px 0;
  }
`;
