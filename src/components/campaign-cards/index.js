import { CardContent, Typography, Box, Grid } from "@material-ui/core";
import ImageInstitution from "../img/instituicao.jpeg";
import styled from "styled-components";
const CampaignCard = () => {
  return (
    <Box m={3}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Container>
          <StyledCardContent>
            <img src={ImageInstitution} alt="institution" />
            <TextContainer>
              <Typography className="titulo" variant="h5">
                {" "}
                Titulo da Campanha{" "}
              </Typography>
              <Typography className="data" color="textSecondary" gutterBottom>
                Validade: 08/01/21 à 15/02/21
              </Typography>
              <Typography className="meta" variant="inherit">
                Meta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam!""Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam!"
              </Typography>
              <InstitutionName
                className="institutionName"
                color="textSecondary"
                align="right"
              >
                {" "}
                Lar Batista - Curitiba-PR
              </InstitutionName>
            </TextContainer>
          </StyledCardContent>
        </Container>
      </Grid>
    </Box>
  );
};

export default CampaignCard;

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
  &:hover {
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.13);
    cursor: pointer;
  }
  img {
    border-radius: 15px;
    max-height: 22vh;
    max-width: 12vw;
    @media (max-width: 870px) {
      flex-wrap: nowrap;
    }
  }
`;
export const TextContainer = styled.div`
  padding-left: 1rem;
`;
export const InstitutionName = styled(Typography)`
  padding-top: 1rem !important;
`;
