import ImageInstitution from "../img/instituicao.jpeg";
import { Box, Grid, Typography } from "@material-ui/core";
import {useSelector} from 'react-redux'
import {
  Container,
  StyledCardContent,
  TextContainer,
  InstitutionName,
} from "./style";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const CampaignCard = ({ title, endDate, location, about, ongName, id }) => {  
  const history = useHistory();
  const currentUserType = useSelector((state) => state.users.data.ngo)

  return (
    <Box m={3}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Container>
          <StyledCardContent style={{backgroundColor: currentUserType ? ('#90BE6D35') : ('#00BBF935')}}>
            <img src={ImageInstitution} alt="institution" />
            <TextContainer>
              <Typography className="titulo" variant="h5">
                {title}
              </Typography>
              <Typography className="data" color="textSecondary" gutterBottom>
                Valido até: {endDate}
              </Typography>
              <Typography className="meta" variant="inherit">
                {about}
              </Typography>

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

export default CampaignCard;
