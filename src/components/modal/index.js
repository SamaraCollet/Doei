import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NewModal, ModalStyle } from "./styled";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
}));

const Agendamento = () => {
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
    product: yup.string().required("Campo obrigatório"),
    amount: yup.number().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    //ENVIAR DADOS PARA A API
    console.log(data);
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
                name="product"
                inputRef={register}
                variant="outlined"
                size="small"
                label="Produto"
                error={!!errors.product}
                helperText={errors.product && "Campo obrigatório"}
              />
              <br />
              <TextField
                name="amount"
                inputRef={register}
                variant="outlined"
                size="small"
                label="Quantidade"
                error={!!errors.amount}
                helperText={errors.amount && "Precisa ser um número"}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Data"
                  name="data"
                  inputRef={register}
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  name="time"
                  inputRef={register}
                  label="Horário"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </MuiPickersUtilsProvider>
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
