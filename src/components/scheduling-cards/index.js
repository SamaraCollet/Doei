// import ImageInstitution from "../img/instituicao.jpeg";
import { Box, Grid, Typography } from "@material-ui/core";
import {
  Container,
  StyledCardContent,
  TextContainer,
  InstitutionName,
} from "./styles";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import PerfilImage from "../../images/perfil.jpg";
const SchedulingCard = ({
  id,
  adTitle,
  campaignId,
  message,
  username,
  scheduledDate,
  ongName,
  quantity,
  _userId,
}) => {
  const history = useHistory();
  return (
    <Box m={3}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Container>
          <StyledCardContent>
            <img src={PerfilImage} alt="institution" />
            <TextContainer>
              <Typography className="titulo" variant="h5" gutterBottom>
                Campanha: {adTitle}
              </Typography>{" "}
              <Typography className="username" gutterBottom>
                Doador: {username}
              </Typography>
              <Typography className="quantity" gutterBottom>
                Quantidade: {quantity}
              </Typography>
              {message && (
                <Typography className="message" gutterBottom>
                  Mensagem: {message}
                </Typography>
              )}
              <Typography className="data" color="textSecondary" gutterBottom>
                Agendado para {scheduledDate.slice(8, 10)}/
                {scheduledDate.slice(5, 7)} as {scheduledDate.slice(11, 16)}
              </Typography>
            </TextContainer>
          </StyledCardContent>
        </Container>
      </Grid>
    </Box>
  );
};

export default SchedulingCard;
