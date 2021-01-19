import { Container } from "./styles";
import DetailTitle from "../../components/detail-title-blue";
import Carousel from "react-elastic-carousel";
import CarouselCard from "../../components/carousel-card";

const SuccessStoriesLandingPage = () => {
  return (
    <Container>
      <h2>Precisa de inspiração?</h2>
      <DetailTitle />
      <Carousel>
        <CarouselCard
          img="/assets/meias.jpg"
          title="Ong Amiga dos Sonhos"
          date="Curitiba-PR - 10/08/2020"
        >
          "Ficamos muito felizes com a contribuição de todos que ajudaram a Ong
          Amiga dos Sonhos na meta de arrecadar 3.000 meias para as crianças
          carentes do bairro Parolim."
        </CarouselCard>
        <CarouselCard
          img="/assets/lencos.jpg"
          title="Atitude na Cabeça"
          date="Curitiba-PR - 12/05/2020"
        >
          "Estamos muito agradecidos. Atingimos a meta de arrecadar 2.000
          lenços, 500 bonés e 300 turbantes para ajudar pessoas que tiveram
          perda total ou parcial dos cabelos por causa de alguma patologia. "
        </CarouselCard>
        <CarouselCard
          img="/assets/criancas.jpg"
          title="Chácara Meninos de 4 Pinheiros"
          date="Curitiba-PR - 02/10/2020"
        >
          "Com muita alegria comunicamos que mais uma meta foi atingida para dar
          assistência a crianças e adolescentes em situações de risco e
          vulnerabilidade social"
        </CarouselCard>
      </Carousel>
    </Container>
  );
};

export default SuccessStoriesLandingPage;
