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

  @media (min-width: 768px) and (max-width: 979px) {
    .card-info {
      padding-left: 30px;
      width: 42vw;
    }
  }

  @media only screen and (max-width: 767px) {
    .card-content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .card-info {
      padding-left: 0;
      width: 55vw;
    }
    .card-title {
      margin-top: 10px;
      text-align: center;
    }

    .card-date {
      text-align: center;
    }
    .card-text {
      width: auto;
    }
  }

  @media (max-width: 480px) {
    .card-info {
      padding-left: 0;
      width: 50vw;
    }
  }
`;
