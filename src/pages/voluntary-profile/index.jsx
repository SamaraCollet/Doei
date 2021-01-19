import CampaignCard from "../../components/campaign-cards";
import Modal from "../../components/modalEdit";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProfileTitle, Container, Info } from "./styles.js";
import jwt_decode from "jwt-decode";

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
            <h1>Perfil</h1>
            <div className="bottom-line" />
          </ProfileTitle>
          <Info>
            <img
              src="https://www.drshaneholmes.com/wp-content/uploads/2020/03/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
              alt="ONG"
            />
            <div>
              <div>
                <h1> {user.name} </h1>
                <Modal
                  editar
                  user={user}
                  setUser={setUser}
                  userId={userId}
                  name={user.name}
                  description={user.description}
                />
              </div>

              <h2> {user.description ? user.description : "Sem descrição"} </h2>
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
        </>
      )}{" "}
    </Container>
  );
};

export default VoluntaryProfile;
