import styled from "styled-components";
import { CardContent, Typography } from "@material-ui/core";
export const Container = styled.div`
  /* max-width: 70% !important; */
  max-height: 40% !important;
  button {
    width: 45px;
    height: 45px;
    border-radius: 25%;
    background: #ffbe0b;
    border: none;
    /* box-shadow: 1px 1px 4px #5e5e5e; */
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
  }

  button:hover {
    background-color: #fdce4c;
  }
`;
export const StyledCardContent = styled(CardContent)`
  width: 60vw !important;
  background-color: rgba(0, 187, 249, 0.35);
  height: inherit !important;
  border-radius: 15px;
  display: flex;
  align-content: center !important;
  margin: 0 auto !important;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.13);
  @media (max-width: 638px) {
    flex-direction: column;
    width: 70vw !important;

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
  width: inherit !important;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (max-width: 720px) {
    width: auto !important;
  }
`;
export const InstitutionName = styled(Typography)`
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
`;

export const ButtonsDiv = styled.div`
  display: flex;
`;
