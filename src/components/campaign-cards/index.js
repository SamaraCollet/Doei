import ImageInstitution from "../img/instituicao.jpeg";
import { Box, Grid, Typography } from "@material-ui/core";
import {
  Container,
  StyledCardContent,
  TextContainer,
  InstitutionName,
} from "./style";

const CampaignCard = ({ title, initialDate, endDate, donationType, about }) => {
  return (
    <Box m={3}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Container>
          <StyledCardContent>
            <img src={ImageInstitution} alt="institution" />
            <TextContainer>
              <Typography className="titulo" variant="h5">
                {title} - <b>{donationType}</b>
              </Typography>
              <Typography className="data" color="textSecondary" gutterBottom>
                Validade: {initialDate} à {endDate}
              </Typography>
              <Typography className="meta" variant="inherit">
                {about}
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
