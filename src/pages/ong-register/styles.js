import styled from "styled-components";
import { FormContainer } from "../../pages/voluntary-register/styles";

export const FormContainerOng = styled(FormContainer)`
  background-color: rgba(144, 190, 109, 0.35);

  @media (min-width: 768px) and (max-width: 979px) {
    margin: 240px 0 20px 0;
    position: relative;
  }
  @media only screen and (max-width: 767px) {
    margin: 250px 0 20px 0;
    width: 90vw;
    position: relative;
  }
  @media (max-width: 480px) {
    width: 300px;
    height: 100vh;
    margin: 30vh 0 20px 0;
    form {
      flex-direction: column;
    }
  }
  @media (max-width: 280px) {
    width: 260px;
  }
`;
