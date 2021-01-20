import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NewModal, ModalStyle } from "./styled";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import jwt_decode from "jwt-decode";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
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
    };

    axios
      .post(`https://capstone4-kenzie.herokuapp.com/donations`, info, config)
      .catch((err) => console.log(err));

    handleClose();
  };

  return (
    <div>
      <Button
        type="button"
        variant="outlined"
        size="medium"
        onClick={handleOpen}
      >
        Participar
      </Button>
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
            <h2 id="transition-modal-title">Agendamento</h2>
            <br />
            <form onSubmit={handleSubmit(handleForm)}>
              <TextField
                name="message"
                inputRef={register}
                variant="outlined"
                size="small"
                label="Mensagem (opcional)"
                error={!!errors.message}
                helperText={errors.message && "Campo obrigatório"}
              />
              <br />
              <TextField
                name="product"
                inputRef={register}
                variant="outlined"
                size="small"
                label="Produto"
                error={!!errors.message}
                helperText={errors.message && "Campo obrigatório"}
              />
              <br />
              <TextField
                name="quantity"
                inputRef={register}
                variant="outlined"
                size="small"
                label="Quantidade"
                error={!!errors.quantity}
                helperText={errors.quantity && "Precisa ser um número"}
              />
              <TextField
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

              <Button type="submit" variant="outlined" size="medium">
                Agendar
              </Button>
            </form>
          </ModalStyle>
        </Fade>
      </NewModal>
    </div>
  );
};

export default Agendamento;
