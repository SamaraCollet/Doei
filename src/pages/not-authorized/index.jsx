import { Link } from "react-router-dom";
import { Container } from "./styles";
import { motion } from "framer-motion";

const NotAuthorized = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Container>
        <div className="big">Oops!</div>
        <h1>Você precisa estar logado pra ter acesso a essa página</h1>
        <p>
          Já é membro do DoEi! ? Você pode se logar como{" "}
          <Link className="link" to="/login-voluntario">
            voluntário
          </Link>{" "}
          ou como{" "}
          <Link className="link" to="/login-ong">
            ONG
          </Link>
        </p>
        <p>
          Mas se ainda não for membro, você pode se cadastrar como{" "}
          <Link className="link" to="/cadastro-voluntario">
            voluntário
          </Link>{" "}
          ou como{" "}
          <Link className="link" to="/cadastro-ong">
            ONG
          </Link>
        </p>
      </Container>
    </motion.div>
  );
};

export default NotAuthorized;
