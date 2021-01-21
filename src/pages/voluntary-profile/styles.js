import styled from "styled-components";

export const ProfileTitle = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.5rem;

  @media (min-width: 768px) and (max-width: 979px) {
    h1 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 280px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: auto;
  margin: 40px 0 80px;

  .name-and-edit-profile {
    display: flex;
    flex-direction: row;
  }

  .img-container img {
    border-radius: 100%;
    width: 180px;
    height: 180px;
    padding: 10px;
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid rgb(0, 187, 249, 0.35);
    width: auto;
    border-radius: 100%;
  }

  p {
    font-size: 18px;
  }

  .profile-data {
    margin-left: 40px;
  }

  .profile-data h2 {
    margin-bottom: 10px;
  }
  @media (min-width: 768px) and (max-width: 979px) {
    width: 75vw;
    .img-container img {
      width: 130px;
      height: 130px;
    }
  }
  @media only screen and (max-width: 767px) {
    width: 72vw;
    flex-direction: column;
    .profile-data {
      display: flex;
      flex-direction: column;
      margin-left: 0;
    }
    .name-and-edit-profile {
      margin: 30px 0 0 45px;
      justify-content: center;
    }
    .img-container img {
      width: 160px;
      height: 160px;
    }
  }
  @media (max-width: 480px) {
    width: 80vw;
    .img-container img {
      width: 150px;
      height: 150px;
    }
    .profile-data {
      text-align: left;
    }
    .name-and-edit-profile {
      margin: 30px 0 0 0;
      justify-content: left;
    }
  }
`;

export const Campaigns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: rgb(232, 241, 242, 0.65);
  padding-bottom: 20px;
  .campaign-cards {
    width: 100%;
  }
  .not-yet {
    width: 100%;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
  }

  @media only screen and (max-width: 767px) {
    .not-yet {
      width: 90%;
      margin: 0 5%;
      text-align: center;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-self: center;
    }
  }
`;
