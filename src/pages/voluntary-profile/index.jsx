import Header from "../../components/header";
import CampaignCard from "../../components/campaign-cards";

import { ProfileTitle, Container, Info } from "./styles.js";

const VoluntaryProfile = () => {
  return (
    <Container>
      <Header />
      <ProfileTitle>
        <h1>Perfil</h1>
        <div className="bottom-line" />
      </ProfileTitle>
      <Info>
        <img
          src="https://www.drshaneholmes.com/wp-content/uploads/2020/03/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
          alt="ONG"
        />
        <div>
          <h1> NOME </h1>
          <h2> DESCRIÇÃO </h2>
        </div>
      </Info>
      <ProfileTitle>
        <h1>Participações</h1>
        <div className="bottom-line" />
      </ProfileTitle>
      <div>
        <CampaignCard />
        <CampaignCard />
      </div>
    </Container>
  );
};

export default VoluntaryProfile;
