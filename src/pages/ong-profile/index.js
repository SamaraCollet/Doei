import CampaignCard from "../../components/campaign-cards";
import Modal from "../../components/modalEdit";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getAllCampaigns } from "../../store/thunks";
import {
  ProfileTitle,
  Container,
  Info,
  Campaigns,
  NewCampaignButton,
} from "./styles.js";
import jwt_decode from "jwt-decode";
import TitleDetail from "../../components/detail-title-blue";

const OngProfile = () => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [userCampaigns, setUserCampaigns] = useState();
  const [userAgendamento, setUserAgendamento] = useState();

  const campaigns = useSelector((state) => state.campaigns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampaigns());
  }, []);

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
        `https://capstone4-kenzie.herokuapp.com/campaigns?userId=${decoded.sub}`,
        config
      )
      .then((res) => setUserCampaigns(res.data));

    axios
      .get(
        `https://capstone4-kenzie.herokuapp.com/donations?campaignId=${decoded.sub}`,
        config
      )
      .then((res) => console.log(res));
  }, []);

  console.log(userCampaigns);
  console.log(userAgendamento);
  return (
    <Container>
      {user && (
        <>
          <ProfileTitle>
            <h1>Meu perfil</h1>
            <TitleDetail />
          </ProfileTitle>
          <Info>
            <div className="img-container">
              <img
                src="/assets/meias.jpg"
                // src="https://www.drshaneholmes.com/wp-content/uploads/2020/03/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                alt="ONG"
              />
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
          <NewCampaignButton>Nova campanha</NewCampaignButton>
          <Campaigns>
            <ProfileTitle>
              <>
                <h1>Minhas campanhas</h1>
                <TitleDetail />
              </>
            </ProfileTitle>

            <div className="campaign-cards">
              {userCampaigns ? (
                userCampaigns.map(
                  ({ title, about, endDate, location, ongName, id }, index) => {
                    return (
                      <CampaignCard
                        key={index}
                        title={title}
                        ongName={ongName}
                        location={location}
                        endDate={endDate}
                        about={about}
                        id={id}
                      />
                    );
                  }
                )
              ) : (
                <h1>Você ainda não tem campanhas</h1>
              )}
            </div>
            <ProfileTitle>
              <h1>Meus Agendamentos</h1>
              <TitleDetail />
            </ProfileTitle>
          </Campaigns>
        </>
      )}
    </Container>
  );
};

export default OngProfile;
