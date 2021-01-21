import { Container, BannerContent, FindLocal } from "./styles";
import { BiSearch } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const BannerLandingPage = () => {
  const history = useHistory();
  const [city, setCity] = useState("curitiba");

  const handleSelect = (event) => {
    setCity(event.target.value);
  };

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
          <select name="select" value={city} onChange={handleSelect}>
            <option value="Curitiba" selected>
              Curitiba
            </option>
            <option value="São Paulo">São Paulo</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
          </select>
          <button
            onClick={() => {
              history.push(`/campaigns-feed/${city}`);
            }}
          >
            <BiSearch />
          </button>
        </FindLocal>
      </BannerContent>
    </Container>
  );
};

export default BannerLandingPage;
