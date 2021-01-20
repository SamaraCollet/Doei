import CampaignCard from "../../components/campaign-cards";
import Modal from "../../components/modalEdit";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProfileTitle, Container, Info, Campaigns } from "./styles.js";
import jwt_decode from "jwt-decode";
import TitleDetail from "../../components/detail-title-blue";

const VoluntaryProfile = () => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [userDonations, setUserDonations] = useState();

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
  }, []);
  console.log(userDonations);
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
          <Campaigns>
            <ProfileTitle>
              <h1>Minhas participações</h1>
              <TitleDetail />
            </ProfileTitle>
            <div className="campaign-cards">
              <CampaignCard />
              <CampaignCard />
            </div>
          </Campaigns>
        </>
      )}
    </Container>
  );
};

export default VoluntaryProfile;
