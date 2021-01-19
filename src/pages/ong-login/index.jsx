import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  BannerLogin,
  StyledTextField,
  StyledButton,
} from "../../pages/voluntary-login/styles";
import { ContainerLoginGreen } from "./styles";
import DetailTitle from "../../components/detail-title-green";

const OngLogin = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

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
      <ContainerLoginGreen>
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
      </ContainerLoginGreen>
    </Container>
  );
};

export default OngLogin;
