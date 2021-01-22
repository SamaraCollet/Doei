import {
  Container,
  FormColumn,
  StyledTextField,
  StyledButton,
} from "../../pages/voluntary-register/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FormContainerOng } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContainerGreen } from "../../components/detail-title-green/styles";
import { motion } from "framer-motion";

const OngRegister = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /[A-Za-z]* [A-Za-z]/g,
        "Não pode receber números nem caracteres especiais, deve ter pelo menos o primeiro e o último nome. "
      ),
    cnpj: yup
      .string()
      .required("Campo obrigatório.")
      .min(13, "CNPJ inválido")
      .matches(/[0-9]/, "Apenas números são permitidos."),
    address: yup.string().required("Campo obrigatório."),
    email: yup.string().required("Campo obrigatório.").email("Email inválido."),
    email_confirmation: yup
      .string()
      .required("Campo obrigatório.")
      .oneOf([yup.ref("email")], "Emails diferentes"),
    password: yup
      .string()
      .required("Campo obrigatório.")
      .min(8, "Mínimo de 8 digitos."),
    password_confirmation: yup
      .string()
      .required("Campo obrigatório.")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const handleForm = (value) => {
    value.ngo = true;
    axios
      .post(`https://capstone4-kenzie.herokuapp.com/register`, { ...value })
      .then((res) => history.push("/login-ong"))
      .catch(() => {
        setError("email", { message: "Este email já está sendo utilizado" });
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
        <FormContainerOng>
          <h1>Cadastro ONG</h1>
          <ContainerGreen />
          <form onSubmit={handleSubmit(handleForm)}>
            <FormColumn>
              <StyledTextField
                variant="outlined"
                size="small"
                name="name"
                label="Nome da ONG"
                inputRef={register}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <StyledTextField
                variant="outlined"
                size="small"
                name="cnpj"
                label="CNPJ"
                inputRef={register}
                error={!!errors.cnpj}
                helperText={errors.cnpj?.message}
              />
              <StyledTextField
                variant="outlined"
                size="small"
                name="address"
                label="Endereço"
                inputRef={register}
                error={!!errors.adress}
                helperText={errors.adress?.message}
              />
              <StyledTextField
                variant="outlined"
                size="small"
                name="site"
                label="Site"
                inputRef={register}
                error={!!errors.site}
                helperText={errors.site?.message}
              />
            </FormColumn>
            <FormColumn>
              <StyledTextField
                variant="outlined"
                size="small"
                name="email"
                label="Email"
                inputRef={register}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <StyledTextField
                variant="outlined"
                size="small"
                name="email_confirmation"
                label="Confirme seu email"
                inputRef={register}
                error={!!errors.email_confirmation}
                helperText={errors.email_confirmation?.message}
              />
              <StyledTextField
                variant="outlined"
                size="small"
                name="password"
                type="password"
                label="Senha"
                inputRef={register}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <StyledTextField
                variant="outlined"
                size="small"
                name="password_confirmation"
                type="password"
                label="Confirme sua senha"
                inputRef={register}
                error={!!errors.password_confirmation}
                helperText={errors.password_confirmation?.message}
              />
              <StyledButton type="submit" variant="outlined" size="medium">
                Enviar
              </StyledButton>
            </FormColumn>
          </form>
        </FormContainerOng>
      </Container>
    </motion.div>
  );
};

export default OngRegister;
