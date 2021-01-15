import ImageInstitution from "../img/instituicao.jpeg";
import { Box, Grid, Typography } from "@material-ui/core";
import {
  Container,
  StyledCardContent,
  TextContainer,
  InstitutionName,
} from "./style";
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
