import { Container } from "./styles";
import Banner from "../../components/banner-landing-page";
import Steps from "../../components/steps-landing-page";
import Stories from "../../components/success-stories-landing-page";
import Footer from "../../components/footer";

const LandingPage = () => {
  return (
    <Container>
      <Banner />
      <Steps />
      <Stories />
      <Footer />
    </Container>
  );
};

export default LandingPage;
