import Header from "../../components/header";
import CampaignCard from "../../components/campaign-cards";
import Modal from "../../components/modalEdit";

import { useEffect, useState } from "react";
import axios from "axios";

import { ProfileTitle, Container, Info } from "./styles.js";
import jwt_decode from "jwt-decode";

const VoluntaryProfile = () => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNAYy5jb20iLCJpYXQiOjE2MTEwNjk2NzYsImV4cCI6MTYxMTA3MzI3Niwic3ViIjoiMTMifQ.UftfaVmN_1BBK6UYLtHq9fUDsrPrI_bIeRnwwhWE0d0";
    var decoded = jwt_decode(token);
    setUserId(decoded.sub);
    axios
      .get(`https://capstone4-kenzie.herokuapp.com/users/${decoded.sub}`)
      .then((res) => setUser(res.data));
  }, []);
  console.log(user);
  return (
    <Container>
      <Header />
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
