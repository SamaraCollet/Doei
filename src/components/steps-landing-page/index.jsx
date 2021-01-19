import { Container, Steps, Step } from "./styles";
import { BiDonateHeart, BiRecycle, BiMap } from "react-icons/bi";
import DetailTitle from "../../components/detail-title-blue";

const StepsLandingPage = () => {
  return (
    <Container>
      <h2>Que tal um passo a passo?</h2>
      <DetailTitle />
      <p className="long-copy">
        Se cada um fizer um pouquinho, muita gente será beneficiada! <br></br>
        Para doar e fazer alguém mais feliz hoje, é simples assim:
      </p>
      <Steps>
        <Step>
          <div className="step-title">
            <BiRecycle className="icon" />
            <h3>Separe as roupas</h3>
          </div>
          <p>
            Você precisa começar separando as roupas que deseja doar, podendo
            ser novas ou usadas, conforme queira contribuir.
          </p>
        </Step>
        <Step>
          <div className="step-title">
            <BiMap className="icon" />
            <h3>Encontre um local</h3>
          </div>
          <p>
            Escolha um local no campo de busca que precise de doações, e irão
            aparecer alguns detalhes. Veja se encaixa com as roupas que pretende
            doar.
          </p>
        </Step>
        <Step>
          <div className="step-title">
            <BiDonateHeart className="icon" />
            <h3>Faça contato</h3>
          </div>
          <p>
            No card que você selecionou, terão informações sobre o local
            escolhido e a organização, e então você poderá fazer contato e
            concluir a doação.
          </p>
        </Step>
      </Steps>
    </Container>
  );
};

export default StepsLandingPage;
