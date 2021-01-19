import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1.8rem;
  }
`;

export const FormContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 189, 249, 0.35);
  border-radius: 15px;
  padding: 52px 25px;

  form {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  width: 250px;
  height: auto;
  flex-direction: column;
  margin: 0 13px;
`;

export const StyledTextField = styled(TextField)`
  width: 100% !important;
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
