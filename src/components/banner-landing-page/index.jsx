import { Container, BannerContent, FindLocal } from "./styles";
import { BiSearch } from "react-icons/bi";

const BannerLandingPage = () => {
  return (
    <Container>
      <BannerContent>
        <h1>Lorem ipsum dolor</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore
          soluta, aperiam cupiditate sunt ullam doloribus. Nulla asperiores,
          magnam necessitatibus odit cum id nesciunt delectus eum dolor nisi
          error eius.
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
