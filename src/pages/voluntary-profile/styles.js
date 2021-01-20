import styled from "styled-components";

export const ProfileTitle = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.5rem;
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
`;

export const Campaigns = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(232, 241, 242, 0.65);
  padding-bottom: 20px;
  .campaign-cards {
    width: 100%;
  }
`;
