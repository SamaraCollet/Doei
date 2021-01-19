import { Container } from "./styled";
import { useHistory } from "react-router-dom";

const IdNotFound = () => {
  const history = useHistory();

  return (
    <Container>
      <h1>Anúncio não encontrado</h1>
      <button onClick={() => history.push("/anuncios")}>
        Voltar para anúncios
      </button>
    </Container>
  );
};

export default IdNotFound;
