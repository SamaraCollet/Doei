import { Container } from "./styles";
import Banner from "../../components/banner-landing-page";
import Steps from "../../components/steps-landing-page";
import Stories from "../../components/success-stories-landing-page";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Container>
        <Banner />
        <Steps />
        <Stories />
      </Container>
    </motion.div>
  );
};

export default LandingPage;
