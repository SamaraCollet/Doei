import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  NewModal,
  ModalStyle,
  StyledButton,
  Container,
  StyledTextField,
} from "./styled";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import DetailTitle from "../../components/detail-title-blue";

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
    height: "400px",
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

const Agendamento = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
    message: yup.string(),
    quantity: yup.number().required("Campo obrigatório"),
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
      userId: id,
      campaignId: props.id,
      ongName: props.name,
      adTitle: props.title,
      endDate: props.end,
      ongId: props.ongId,
    };

    axios
      .post(`https://capstone4-kenzie.herokuapp.com/donations`, info, config)
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
        Participar
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
              <h2 id="transition-modal-title">Agendamento</h2>
              <DetailTitle />
            </div>
            <form onSubmit={handleSubmit(handleForm)}>
              <StyledTextField
                name="message"
                inputRef={register}
                variant="outlined"
                size="small"
                label="Mensagem (opcional)"
                error={!!errors.message}
                helperText={errors.message && "Campo obrigatório"}
              />
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
                name="quantity"
                inputRef={register}
                variant="outlined"
                size="small"
                label="Quantidade"
                error={!!errors.quantity}
                helperText={errors.quantity && "Precisa ser um número"}
              />
              <StyledTextField
                name="scheduledDate"
                inputRef={register}
                id="datetime-local"
                label="Data"
                type="datetime-local"
                defaultValue="2021-01-19T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <StyledButton type="submit" variant="outlined" size="medium">
                Agendar
              </StyledButton>
            </form>
          </ModalStyle>
        </Fade>
      </NewModal>
    </Container>
  );
};

export default Agendamento;
