import { Container, BannerContent, FindLocal } from "./styles";
import { BiSearch } from "react-icons/bi";

const BannerLandingPage = () => {
  return (
    <Container>
      <BannerContent>
        <h1>
          Doe amor, <br></br>Doe roupas!
        </h1>
        <p>
          Aproveite que você tem roupas guardadas e que não usa mais, doe-as, e
          faça uma pessoa mais feliz! <br></br> Confira abaixo, as localizações
          de quem precisa:
        </p>
        <FindLocal>
          <select name="select">
            <option value="valor1">Valor 1</option>
            <option value="valor2" selected>
              Valor 2
            </option>
            <option value="valor3">Valor 3</option>
          </select>
          <button>
            <BiSearch />
          </button>
        </FindLocal>
      </BannerContent>
    </Container>
  );
};

export default BannerLandingPage;
