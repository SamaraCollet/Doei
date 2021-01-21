import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const NewModal = styled(Modal)``;

export const Container = styled.div`
  .icon-edit {
    font-size: 25px;
    color: #4b4b4b;
  }
`;

export const ModalStyle = styled.div`
  .title-modal {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-top: 5px;
  }
  form {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #ffbe0b !important;
  width: 250px;
  font-weight: bold !important;
  margin-top: 30px !important;
  margin-bottom: 10px;
  font-family: "Nunito", sans-serif !important;
  height: 40px;
  border-radius: 5px !important;
`;

export const StyledTextField = styled(TextField)`
  margin: 5px 0 !important;
  width: 100% !important;
`;
