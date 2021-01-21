import { Link } from "react-router-dom";
import { Container } from "./styles";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Container>
        <div className="big">Oops!</div>
        <h1>Desculpe, esta página não está disponível.</h1>
        <p>Este link pode estar quebrado ou a página pode ter sido removida.</p>
        <Link className="link" to="/">
          Retornar à página inicial
        </Link>
      </Container>
    </motion.div>
  );
};

export default PageNotFound;
