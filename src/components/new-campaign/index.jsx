import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  NewModal,
  ModalStyle,
  StyledButton,
  Container,
  StyledTextField,
} from "../modal/styled";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import DetailTitle from "../../components/detail-title-blue";

import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #585858",
    borderRadius: "20px",
    width: "250px",
    height: "auto",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));

const NewCampaign = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const campaigns = useSelector((state) => state.campaigns);
  const [city, setCity] = useState("Curitiba");

  const handleSelect = (event) => {
    setCity(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedDate, setSelectedDate] = useState(
    new Date("2021-01-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const schema = yup.object().shape({
    title: yup.string(),
    about: yup.string(),
    goal: yup.number().required("Campo obrigatório"),
    product: yup.string().required(),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    let token = localStorage.getItem("authToken");
    const config = {
      headers: { authorization: `Bearer ${token} ` },
    };
    const decoded = jwt_decode(token);
    const id = decoded.sub;

    const info = {
      ...data,
      id: campaigns.lenght + 1,
      userId: id,
      ongName: props.name,
      location: city,
      address: props.address,
    };

    axios
      .post(`https://capstone4-kenzie.herokuapp.com/campaigns`, info, config)
      .catch((err) => console.log(err));

    handleClose();
  };

  return (
    <Container>
      <StyledButton
        type="button"
        variant="outlined"
        size="medium"
        onClick={handleOpen}
      >
        Nova Campanha
      </StyledButton>
      <NewModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalStyle className={classes.paper}>
            <div className="title-modal">
              <h2 id="transition-modal-title">Nova Campanha</h2>
              <DetailTitle />
            </div>
            <form onSubmit={handleSubmit(handleForm)}>
              <StyledTextField
                name="title"
                inputRef={register}
                variant="outlined"
                size="small"
                label="Título da Campanha"
                error={!!errors.message}
                helperText={errors.message && "Campo obrigatório"}
              />
              <StyledTextField
                name="about"
                inputRef={register}
                variant="outlined"
                size="small"
                label="Sobre da Campanha"
                error={!!errors.message}
                helperText={errors.message && "Campo obrigatório"}
              />
              <select
                name="select"
                inputRef={register}
                value={city}
                onChange={handleSelect}
              >
                <option value="Curitiba" selected>
                  Curitiba
                </option>
                <option value="São Paulo">São Paulo</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
              </select>
              <StyledTextField
                name="product"
                inputRef={register}
                variant="outlined"
                size="small"
                label="Produto"
                error={!!errors.message}
                helperText={errors.message && "Campo obrigatório"}
              />
              <StyledTextField
                name="goal"
                inputRef={register}
                variant="outlined"
                size="small"
                label="Objetivo (Quantidade)"
                error={!!errors.quantity}
                helperText={errors.quantity && "Precisa ser um número"}
              />
              <StyledTextField
                name="initialDate"
                inputRef={register}
                id="datetime-local"
                label="Começo da Campanha (Data)"
                type="datetime-local"
                defaultValue="2021-01-19T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <StyledTextField
                name="endDate"
                inputRef={register}
                id="datetime-local"
                label="Fim da Campanha (Data)"
                type="datetime-local"
                defaultValue="2021-01-19T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <StyledButton type="submit" variant="outlined" size="medium">
                Criar Campanha
              </StyledButton>
            </form>
          </ModalStyle>
        </Fade>
      </NewModal>
    </Container>
  );
};

export default NewCampaign;
