import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  StyledButtonMin,
  StyledButtonSave,
  NewModal,
  ModalStyle,
  StyledTextField,
} from "./styled";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { BiPencil } from "react-icons/bi";
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
    height: "250px",
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
    <Container>
      <StyledButtonMin
        title="Editar perfil"
        type="button"
        variant="outlined"
        size="medium"
        onClick={handleOpen}
      >
        <BiPencil className="icon-edit" />
        {/* Editar perfil */}
      </StyledButtonMin>
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
              <h1 id="transition-modal-title">Editar perfil</h1>
              <DetailTitle />
            </div>
            <form onSubmit={handleSubmit(handleEdit)}>
              <StyledTextField
                name="name"
                inputRef={register}
                variant="outlined"
                size="small"
                label={newName}
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />

              <StyledTextField
                name="description"
                inputRef={register}
                variant="outlined"
                size="small"
                label="Descrição"
              />

              <StyledButtonSave type="submit" variant="outlined" size="medium">
                Alterar dados
              </StyledButtonSave>
            </form>
          </ModalStyle>
        </Fade>
      </NewModal>
    </Container>
  );
};

export default Edit;
