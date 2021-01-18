import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  BannerLogin,
  ContainerLogin,
  StyledTextField,
  StyledButton,
} from "./styles";
import DetailTitle from "../../components/detail-title-blue";

<<<<<<< HEAD:src/pages/login/index.jsx
const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
=======
const OngLogin = () => {
    const schema = yup.object().shape({
        email: yup.string().required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório")
    })
>>>>>>> 867b15897841fa3da9089e64495a7fa0282bd4fc:src/pages/ong-login/index.jsx

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (value) => {
    //AQUI VEM O REQUEST PRA API E REDIRECIONAR PARA A PÁGINA DOS ANUNCIOS
    console.log(value);
  };

  return (
    <Container>
      <BannerLogin src="donation.jpg" alt="donation" />
      <ContainerLogin>
        <h1>Login Page</h1>
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
            label="Senha"
            inputRef={register}
            error={!!errors.password || !!errors.email}
            helperText={errors.password?.message}
          />
          <StyledButton type="submit" variant="outlined" size="medium">
            Entrar
          </StyledButton>
        </form>
      </ContainerLogin>
    </Container>
  );
};

<<<<<<< HEAD:src/pages/login/index.jsx
export default Login;
=======
export default OngLogin
>>>>>>> 867b15897841fa3da9089e64495a7fa0282bd4fc:src/pages/ong-login/index.jsx
