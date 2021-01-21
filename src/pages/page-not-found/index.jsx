import { Link } from "react-router-dom";
import { Container } from "./styles";

const PageNotFound = () => {
  console.log("asdnjklas");
  return (
    <Container>
      <h1>Desculpe, esta página não está disponível.</h1>
      <h2>Este link pode estar quebrado ou a página pode ter sido removida.</h2>
      <Link to="/">Retornar à página inicial</Link>
    </Container>
  );
};

export default PageNotFound;
