import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  BannerLogin,
  StyledTextField,
  StyledButton,
  RegisterLink,
} from "../../pages/voluntary-login/styles";
import { ContainerLoginGreen } from "./styles";
import DetailTitle from "../../components/detail-title-green";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../store/thunks";
import { motion } from "framer-motion";

const OngLogin = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const handleForm = (value) => {
    axios
      .post("https://capstone4-kenzie.herokuapp.com/login", { ...value })
      .then((res) => {
        const currentUserToken = res.data.accessToken;
        const decodedToken = jwt_decode(currentUserToken);
        window.localStorage.setItem("authToken", currentUserToken);
        window.localStorage.setItem("currentUserId", decodedToken.sub);
        dispatch(getCurrentUser(decodedToken.sub));
        history.push("/campaigns-feed");
      })

      .catch((err) => {
        setError("email", { message: "Usuário ou senha inválido" });
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Container>
        <BannerLogin src="/assets/ong.png" alt="donation" />
        <ContainerLoginGreen>
          <h1>Olá, faça o login!</h1>
          <DetailTitle />
          <form onSubmit={handleSubmit(handleForm)}>
            <StyledTextField
              variant="outlined"
              size="small"
              name="email"
              label="Email"
              inputRef={register}
              error={!!errors.email || !!errors.password}
              helperText={errors.email?.message}
            />
            <StyledTextField
              variant="outlined"
              size="small"
              name="password"
              type="password"
              label="Senha"
              inputRef={register}
              error={!!errors.password || !!errors.email}
              helperText={errors.password?.message}
            />
            <StyledButton type="submit" variant="outlined" size="medium">
              Entrar
            </StyledButton>
          </form>
          <RegisterLink>
            Ainda não é cadastrado? <Link to="/cadastro-ong">Cadastre-se</Link>
          </RegisterLink>
        </ContainerLoginGreen>
      </Container>
    </motion.div>
  );
};

export default OngLogin;
