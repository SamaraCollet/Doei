import ImageInstitution from "../img/instituicao.jpeg";
import { Box, Grid, Typography } from "@material-ui/core";
import {
  Container,
  StyledCardContent,
  TextContainer,
  InstitutionName,
} from "./style";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const SchedulingCard = ({
  id,
  campaignId,
  message,
  username,
  scheduledDate,
  quantity,
  userId,
}) => {
  const history = useHistory();
  return (
    <Box m={3}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Container
          onClick={() => {
            history.push(`/campaign/${id}`);
          }}
        >
          <StyledCardContent>
            <img src={ImageInstitution} alt="institution" />
            <TextContainer>
              <Typography className="titulo" variant="h5">
                {username} -- {campaignId}
              </Typography>
              <Typography className="data" color="textSecondary" gutterBottom>
                Data Agendada: {scheduledDate}
              </Typography>
              <Typography className="meta" variant="inherit"></Typography>

              <InstitutionName
                className="institutionName"
                color="textSecondary"
                align="right"
              >
                {ongName} - {location}
              </InstitutionName>
            </TextContainer>
            <button
              onClick={() => {
                history.push(`/campaign/${id}`);
              }}
            >
              <BiDotsHorizontalRounded />
            </button>
          </StyledCardContent>
        </Container>
      </Grid>
    </Box>
  );
};

export default SchedulingCard;
