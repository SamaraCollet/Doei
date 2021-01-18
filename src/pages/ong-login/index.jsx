import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const OngLogin = () => {
    const schema = yup.object().shape({
        email: yup.string().required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório")
    })

    const { register, handleSubmit, errors, setError } = useForm({ resolver : yupResolver(schema)})

    const handleForm = value => {
        //AQUI VEM O REQUEST PRA API E REDIRECIONAR PARA A PÁGINA DOS ANUNCIOS
        console.log(value)
    }

    return (
        <div>
            Login Page
            <form onSubmit={handleSubmit(handleForm)}>
                <TextField 
                    variant="outlined"
                    size="small"
                    name="email"
                    label="Email"
                    inputRef={register}
                    error={!!errors.email || !!errors.password}
                    helperText={errors.email?.message}
                />
                <TextField
                    variant="outlined"
                    size="small"
                    name="password"
                    label="Senha"
                    inputRef={register}
                    error={!!errors.password || !!errors.email}
                    helperText={errors.password?.message}
                />
                <Button type="submit" variant="outlined" size="medium">Entrar</Button>
            </form>
        </div>
    )
}

export default OngLogin