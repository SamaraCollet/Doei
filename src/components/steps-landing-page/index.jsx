import { Container, DetailTitle, Steps, Step } from "./styles";
import { BiDonateHeart } from "react-icons/bi";

const StepsLandingPage = () => {
  return (
    <Container>
      <h2>Passo a passo</h2>
      <DetailTitle />
      <p className="long-copy">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga explicabo
        animi eaque deserunt error quae assumenda doloremque eius voluptatem.
      </p>
      <Steps>
        <Step>
          <div className="step-title">
            <BiDonateHeart className="icon" />
            <h3>ashdopihasodi</h3>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            explicabo animi eaque deserunt error quae assumenda doloremque eius
            voluptatem.
          </p>
        </Step>
        <Step>
          <div className="step-title">
            <BiDonateHeart className="icon" />
            <h3>ashdopihasodi</h3>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            explicabo animi eaque deserunt error quae assumenda doloremque eius
            voluptatem.
          </p>
        </Step>
        <Step>
          <div className="step-title">
            <BiDonateHeart className="icon" />
            <h3>ashdopihasodi</h3>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            explicabo animi eaque deserunt error quae assumenda doloremque eius
            voluptatem.
          </p>
        </Step>
      </Steps>
    </Container>
  );
};

export default StepsLandingPage;
