import CampaignCard from "../../components/campaign-cards";
import Modal from "../../components/modalEdit";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProfileTitle, Container, Info, Campaigns } from "./styles.js";
import { GifTab } from "../ad-page/styled";
import jwt_decode from "jwt-decode";
import TitleDetail from "../../components/detail-title-blue";
import gif from "../../images/loading.gif";
import { motion } from "framer-motion";

const VoluntaryProfile = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState();
  const [userDonations, setUserDonations] = useState([]);
  const [campaigns, setCampaigns] = useState();

  useEffect(() => {
    let token = localStorage.getItem("authToken");
    var decoded = jwt_decode(token);
    setUserId(decoded.sub);
    axios
      .get(`https://capstone4-kenzie.herokuapp.com/users/${decoded.sub}`)
      .then((res) => setUser(res.data));

    const config = {
      headers: { authorization: `Bearer ${token} ` },
    };

    axios
      .get(
        `https://capstone4-kenzie.herokuapp.com/donations?userId=${decoded.sub}`,
        config
      )
      .then((res) =>
        res.data.length <= 0
          ? setUserDonations("nothing")
          : setUserDonations(res.data)
      );

    axios
      .get(`https://capstone4-kenzie.herokuapp.com/campaigns`)
      .then((res) => setCampaigns(res.data));
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Container>
        {userDonations.length > 0 && user ? (
          <>
            <ProfileTitle>
              <h1>Meu perfil</h1>
              <TitleDetail />
            </ProfileTitle>
            <Info>
              <div className="img-container">
                <img src="/assets/perfil.jpg" alt="ONG" />
              </div>
              <div className="profile-data">
                <div className="name-and-edit-profile">
                  <h2> {user.name} </h2>
                  <Modal
                    editar
                    user={user}
                    setUser={setUser}
                    userId={userId}
                    name={user.name}
                    description={user.description}
                  />
                </div>
                <p> {user.description ? user.description : "Sem descrição"} </p>
              </div>
            </Info>
            <Campaigns>
              <ProfileTitle>
                <h1>Minhas participações</h1>
                <TitleDetail />
              </ProfileTitle>
              <div className="campaign-cards">
                {userDonations !== "nothing" ? (
                  userDonations.map((donation, index) => {
                    return (
                      <CampaignCard
                        key={index}
                        title={donation.adTitle}
                        endDate={donation.endDate}
                        about={`Agendado para ${donation.scheduledDate.slice(
                          8,
                          10
                        )}/${donation.scheduledDate.slice(
                          5,
                          7
                        )} as ${donation.scheduledDate.slice(11, 16)}`}
                        ongName={`Produto: ${donation.product}`}
                        location={`Quantidade:${donation.quantity}`}
                        id={donation.campaignId}
                      />
                    );
                  })
                ) : (
                  <div className="campaign-cards">
                    <div className="not-yet">
                      Você ainda não esta participando de nenhuma campanha!
                    </div>
                  </div>
                )}
              </div>
            </Campaigns>
          </>
        ) : (
          <GifTab>
            <img src={gif} alt="loading" />
          </GifTab>
        )}
      </Container>
    </motion.div>
  );
};

export default VoluntaryProfile;
