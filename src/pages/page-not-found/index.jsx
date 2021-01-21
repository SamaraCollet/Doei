import { Link } from "react-router-dom";
import { Container } from "./styles";

const PageNotFound = () => {
  return (
    <Container>
      <div className="big">Oops!</div>
      <h1>Desculpe, esta página não está disponível.</h1>
      <p>Este link pode estar quebrado ou a página pode ter sido removida.</p>
      <Link className="link" to="/">
        Retornar à página inicial
      </Link>
    </Container>
  );
};

export default PageNotFound;
