// import CampaignCard from "../../components/campaign-cards";
// import Modal from "../../components/modalEdit";
import { useEffect, useState } from "react";
import axios from "axios";
// import { ProfileTitle, Container, Info, Campaigns } from "./styles.js";
import jwt_decode from "jwt-decode";
// import TitleDetail from "../../components/detail-title-blue";

const OngProfile = () => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [userCampaigns, setUserCampaigns] = useState();
  const [userAgendamento, setUserAgendamento] = useState();

  useEffect(() => {
    let token = localStorage.getItem("authToken");
    var decoded = jwt_decode(token);
    setUserId(decoded.sub);
    axios
      .get(`https://capstone4-kenzie.herokuapp.com/users/${decoded.sub}`)
      .then((res) => setUser(res.data));
    console.log(userId);
    const config = {
      headers: { authorization: `Bearer ${token} ` },
    };
    axios
      .get(
        `https://capstone4-kenzie.herokuapp.com/donations?userId=${decoded.sub}`,
        config
      )
      .then((res) => setUserCampaigns(res.data));
  }, []);
  console.log(userId);
  return (
    <>
      <div>Página de Perfil</div>
      <div className="perfil">
        <div className="image">
          <img />
        </div>
        <div className="infos">
          <div>Nome da Ong</div>
          <div>Descrição</div>
          <div>Localização</div>
        </div>
      </div>
      <div className="campanhas">
        <div>
          <div>Minhas campanhas</div>
          <button>Nova Campanha</button>
        </div>
        <div>Cards Campanhas</div>
      </div>
      <div className="agendamentos">
        <div>
          <div>Agendamentos</div>
          <div> Cards Agendamentos</div>
        </div>
      </div>
    </>
  );
};

export default OngProfile;
