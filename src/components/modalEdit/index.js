import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NewModal, ModalStyle } from "./styled";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

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

const Edit = ({ userId, user, setUser }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState(user.name);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string(),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEdit = (data) => {
    console.log(data);
    let token = localStorage.getItem("authToken");

    const config = {
      headers: { authorization: `Bearer ${token} ` },
    };
    axios
      .patch(
        `https://capstone4-kenzie.herokuapp.com/users/${userId}`,
        data,
        config
      )
      .catch((err) => console.log(err));

    setUser(data);

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
        Editar perfil
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
            <h2 id="transition-modal-title">Perfil</h2>
            <br />
            <form onSubmit={handleSubmit(handleEdit)}>
              <TextField
                name="name"
                inputRef={register}
                variant="outlined"
                size="small"
                label={newName}
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <br />
              <TextField
                name="description"
                inputRef={register}
                variant="outlined"
                size="small"
                label="Descrição"
              />

              <Button type="submit" variant="outlined" size="medium">
                Alterar dados
              </Button>
            </form>
          </ModalStyle>
        </Fade>
      </NewModal>
    </div>
  );
};

export default Edit;
