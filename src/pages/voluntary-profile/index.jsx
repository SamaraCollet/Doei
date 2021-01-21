import CampaignCard from "../../components/campaign-cards";
import Modal from "../../components/modalEdit";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProfileTitle, Container, Info, Campaigns } from "./styles.js";
import { GifTab } from "../ad-page/styled";
import jwt_decode from "jwt-decode";
import TitleDetail from "../../components/detail-title-blue";
import gif from "../../images/loading.gif";

const VoluntaryProfile = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState();
  const [userDonations, setUserDonations] = useState(null);
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
      .then((res) => setUserDonations(res.data));

    axios
      .get(`https://capstone4-kenzie.herokuapp.com/campaigns`)
      .then((res) => setCampaigns(res.data));
  }, []);
  console.log(userDonations);
  return (
    <Container>
      {user && userDonations !== null ? (
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
          {userDonations === [] ? (
            <Campaigns>
              <ProfileTitle>
                <h1>Minhas participações</h1>
                <TitleDetail />
              </ProfileTitle>
              <div className="campaign-cards">
                {userDonations !== [] &&
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
                  })}
              </div>
            </Campaigns>
          ) : (
            <Campaigns>
              <ProfileTitle>
                <h1>Minhas participações</h1>
                <TitleDetail />
              </ProfileTitle>
              <div className="campaign-cards">
                <div className="not-yet">
                  Você inda não esta participando de nenhuma campanha!
                </div>
              </div>
            </Campaigns>
          )}
        </>
      ) : (
        <GifTab>
          <img src={gif} alt="loading" />
        </GifTab>
      )}
    </Container>
  );
};

export default VoluntaryProfile;
