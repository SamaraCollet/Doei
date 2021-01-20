import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const Container = styled.div`
  .icon-edit {
    font-size: 25px;
    color: #4b4b4b;
  }
`;

export const NewModal = styled(Modal)``;

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
  }
`;

export const StyledButtonMin = styled(Button)`
  border: none !important;
  border-radius: 50px !important;
  height: 30px !important;
  width: 30px !important;
  padding: 0 !important;
`;

export const StyledButtonSave = styled(Button)`
  margin-top: 20px !important;
  background-color: #ffbe0b !important;
`;

export const StyledTextField = styled(TextField)`
  margin: 5px 0 !important;
`;
