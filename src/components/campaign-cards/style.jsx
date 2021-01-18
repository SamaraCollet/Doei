import styled from "styled-components";
import { CardContent, Typography } from "@material-ui/core";
export const Container = styled.div`
  max-width: 70% !important;
  max-height: 40% !important;
`;
export const StyledCardContent = styled(CardContent)`
  background-color: rgba(0, 187, 249, 0.35);
  height: inherit !important;
  border-radius: 15px;
  display: flex;
  align-content: center !important;
  margin: 0 auto !important;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.13);
  @media (max-width: 740px) {
    flex-direction: column;
    img {
      flex-wrap: nowrap;
      max-width: fit-content !important;
    }
  }
  &:hover {
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.13);
    cursor: pointer;
  }
  img {
    border-radius: 15px;
    max-height: 22vh;
    max-width: 17vw;
  }
`;
export const TextContainer = styled.div`
  padding-left: 1rem;
`;
export const InstitutionName = styled(Typography)`
  padding-top: 1rem !important;
`;
