import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.8rem;
  }
  @media (min-width: 768px) and (max-width: 979px) {
    h1 {
      font-size: 1.6rem;
    }
  }
  @media only screen and (max-width: 767px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const BannerLogin = styled.img`
  width: 690px;
  opacity: 0.9;
  position: relative;
  right: 15%;
  @media (max-width: 1200px) {
    width: 50vw;
    right: 19vw;
  }
  @media (min-width: 896px) and (max-width: 979px) {
    width: 70vw;
  }
  @media (min-width: 768px) and (max-width: 895px) {
    width: 60vw;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const ContainerLogin = styled.div`
  width: 400px;
  height: 400px;
  background-color: rgba(0, 189, 249, 0.35);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  position: absolute;
  left: 55%;
  box-shadow: 1px 1px 5px #c7c7c7, -1px -1px 5px #c7c7c7;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 1200px) {
    left: 55vw;
  }
  @media (min-width: 896px) and (max-width: 979px) {
    left: 53vw;
  }
  @media (min-width: 841px) and (max-width: 895px) {
    left: 50vw;
  }
  @media (min-width: 768px) and (max-width: 840px) {
    left: 52vw;
    box-shadow: none;
    width: 350px;
    height: 325px;
  }
  @media only screen and (max-width: 767px) {
    left: 0;
    width: 350px;
    height: 315px;
    position: relative;
  }
  @media (max-width: 480px) {
    width: 90vw;
    height: 400px;
    border-radius: 15px;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 270px !important;
  background-color: #eeeeee !important;
  font-size: 10px !important;
  border-radius: 4px !important;
  margin-top: 9px !important;

  @media (max-width: 280px) {
    width: 90% !important;
    align-self: center;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #ffbe0b !important;
  width: 100%;
  font-weight: bold !important;
  margin-top: 30px !important;
  margin-bottom: 10px;
  font-family: "Nunito", sans-serif !important;
  height: 40px;
  border-radius: 5px !important;

  @media (min-width: 768px) and (max-width: 979px) {
    margin-top: 20px !important;
  }

  @media only screen and (max-width: 767px) {
    margin-top: 20px !important;
  }

  @media (max-width: 280px) {
    width: 90% !important;
    align-self: center;
  }
`;

export const RegisterLink = styled.p`
  margin-top: 25px;
  font-size: 14px;
  color: #3d3d3d;

  a {
    text-decoration: none;
    color: #17728d;
  }
  @media only screen and (max-width: 767px) {
    margin-top: 15px;
  }
`;
