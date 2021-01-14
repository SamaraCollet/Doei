import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const VoluntaryRegister = () => {
    const schema = yup.object().shape({
        name: yup
          .string()
          .required("Campo obrigatório")
          .matches(
            /[A-Za-z]* [A-Za-z]/g,
            "Não pode receber números nem caracteres especiais, deve ter pelo menos o primeiro e o último nome. "
          ),
        email: yup.string().required("Campo obrigatório.").email("Email inválido."),
        email_confirmation: yup
          .string()
          .required("Campo obrigatório.")
          .oneOf([yup.ref("email")], "Emails diferentes"),
        password: yup
          .string()
          .required("Campo obrigatório.")
          .matches(
            /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caractere especial"
          )
          .min(8, "Mínimo de 8 digitos."),
        password_confirmation: yup
          .string()
          .required("Campo obrigatório.")
          .oneOf([yup.ref("password")], "Senhas diferentes"),
    });
    
    const { register, handleSubmit, errors, setError } = useForm({
      resolver: yupResolver(schema),
    });
    
    const handleForm = value => {
      //AQUI VEM O REQUEST PRA API E REDIRECIONAR PARA A PÁGINA DE LOGIN 
      console.log('sucesso')
      console.log(value)
    };
    
    return (
        <div>
            <div>
                Cadastro voluntário
            </div>
          <form onSubmit={handleSubmit(handleForm)}>
            <TextField
              variant="outlined"
              size="small"
              name="name"
              label="Nome completo"
              inputRef={register}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              variant="outlined"
              size="small"
              name="email"
              label="Email"
              inputRef={register}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              variant="outlined"
              size="small"
              name="email_confirmation"
              label="Confirme seu email"
              inputRef={register}
              error={!!errors.email_confirmation}
              helperText={errors.email_confirmation?.message}
            />
            <TextField
              variant="outlined"
              size="small"
              name="password"
              label="Senha"
              inputRef={register}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              variant="outlined"
              size="small"
              name="password_confirmation"
              label="Confirme sua senha"
              inputRef={register}
              error={!!errors.password_confirmation}
              helperText={errors.password_confirmation?.message}
            />
            <Button type="submit" variant="outlined" size="medium">Enviar</Button>
          </form>
        </div>
    );

}

export default VoluntaryRegister