import { Container } from "./styles";
import { DetailTitle } from "../../components/steps-landing-page/styles";
import Carousel from "react-elastic-carousel";
import CarouselCard from "../../components/carousel-card";

const SuccessStoriesLandingPage = () => {
  return (
    <Container>
      <h2>Casos de sucesso</h2>
      <DetailTitle />
      <Carousel>
        <CarouselCard
          title="Organização do bem"
          date="Curitiba-PR - 10/08/2020"
        >
          Sucesso: Meta de 3000 meias entregues para as crh jyf guiug iutgiug
          itugiu buikuyhiou gjg uygfg ukgkjb hk hjoih io uoiuoi uoiu oiuy o ouoi
          y oiianças do Parolim.
        </CarouselCard>
        <CarouselCard />
        <CarouselCard />
      </Carousel>
    </Container>
  );
};

export default SuccessStoriesLandingPage;
