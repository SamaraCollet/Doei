import ImageInstitution from "../img/instituicao.jpeg";
import { Box, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import {
  Container,
  StyledCardContent,
  TextContainer,
  InstitutionName,
  ButtonsDiv,
} from "./style";
import { BiRightArrowAlt, BiEditAlt } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const CampaignCard = ({
  title,
  endDate,
  location,
  about,
  ongName,
  id,
  ongProfile = false,
}) => {
  const history = useHistory();

  const ong = localStorage.getItem("isOng");
  const [editable, setEditable] = useState(true);
  const [newTitle, setNewTitle] = useState(title);
  const [newAbout, setNewAbout] = useState(about);
  const [newDate, setNewDate] = useState(endDate);

  // const handleChanges = async (data) => {
  //   let token = localStorage.getItem("authToken");
  //   const config = {
  //     headers: { authorization: `Bearer ${token} ` },
  //   };
  //   axios
  //     .patch(
  //       `https://capstone4-kenzie.herokuapp.com/campaigns/${id}`,
  //       data,
  //       config
  //     )
  //     .catch((err) => console.log(err));
  //   console.log(data);
  // };

  return (
    <Box m={3}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Container
          onClick={() => {
            history.push(`/campaign/${id}`);
          }}
        >
          <StyledCardContent
            style={{
              backgroundColor: ong === "false" ? "#00BBF935" : "#90BE6D35",
            }}
          >
            <img src={ImageInstitution} alt="institution" />
            <TextContainer>
              <Typography className="titulo" variant="h5">
                {newTitle}
              </Typography>
              <Typography className="data" color="textSecondary" gutterBottom>
                Valido até: {newDate}
              </Typography>
              <Typography className="meta" variant="inherit">
                {newAbout}
              </Typography>

              <InstitutionName
                className="institutionName"
                color="textSecondary"
                align="right"
              >
                {ongName} - {location}
              </InstitutionName>
            </TextContainer>
            <ButtonsDiv>
              {ongProfile && (
                <button>
                  <BiEditAlt />
                </button>
              )}

              <button
                onClick={() => {
                  history.push(`/campaign/${id}`);
                }}
              >
                <BiRightArrowAlt />
              </button>
            </ButtonsDiv>
          </StyledCardContent>
        </Container>
      </Grid>
    </Box>
  );
};

export default CampaignCard;
