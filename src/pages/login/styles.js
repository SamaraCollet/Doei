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
`;

export const BannerLogin = styled.img`
  width: 690px;
  opacity: 0.9;
  position: relative;
  right: 14%;
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
  left: 57%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 270px !important;
  background-color: #eeeeee !important;
  font-size: 10px !important;
  border-radius: 4px !important;
  margin-top: 9px !important;
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
`;
