import CampaignCard from "../../components/campaign-cards";
import Modal from "../../components/modalEdit";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getAllCampaigns } from "../../store/thunks";
import { ProfileTitle, Container, Info, Campaigns } from "./styles.js";
import jwt_decode from "jwt-decode";
import TitleDetail from "../../components/detail-title-blue";
import SchedulingCard from "../../components/scheduling-cards";
import NewCampaign from "../../components/new-campaign";
import { motion } from "framer-motion";

const OngProfile = () => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [userCampaigns, setUserCampaigns] = useState([]);
  const [userScheduling, setUserScheduling] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

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
      .get("https://capstone4-kenzie.herokuapp.com/users")
      .then((res) => setAllUsers(res.data));

    axios
      .get(`https://capstone4-kenzie.herokuapp.com/users/${decoded.sub}`)
      .then((res) => setUser(res.data));

    const config = {
      headers: { authorization: `Bearer ${token} ` },
    };
    axios
      .get(
        `https://capstone4-kenzie.herokuapp.com/campaigns?userId=${decoded.sub}`,
        config
      )
      .then((res) =>
        res.data.length <= 0
          ? setUserCampaigns("nothing")
          : setUserCampaigns(res.data)
      );

    axios
      .get(
        `https://capstone4-kenzie.herokuapp.com/donations?ongId=${decoded.sub}`,
        config
      )
      .then((res) =>
        res.data.length <= 0
          ? setUserScheduling("nothing")
          : setUserScheduling(res.data)
      );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
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
            <NewCampaign name={user.name} id={userId} address={user.address} />
            <br />
            <Campaigns>
              <ProfileTitle>
                <>
                  <h1>Minhas campanhas</h1>
                  <TitleDetail />
                </>
              </ProfileTitle>

              <div className="campaign-cards">
                {userCampaigns !== "nothing" ? (
                  userCampaigns.map(
                    (
                      { title, about, endDate, location, ongName, id },
                      index
                    ) => {
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
                  <div className="campaign-cards">
                    <div className="not-yet">
                      Você ainda não criou uma nova campanha!
                    </div>
                  </div>
                )}
              </div>
              <ProfileTitle>
                <h1>Agendamentos</h1>
                <TitleDetail />

                <div className="scheduling-cards">
                  {userScheduling !== "nothing" ? (
                    userScheduling.map(
                      (
                        {
                          id,
                          userId,
                          adTitle,
                          campaignId,
                          message,
                          username,
                          scheduledDate,
                          ongName,
                          quantity,
                          _userId,
                        },
                        index
                      ) => {
                        let user = allUsers.filter((e) => e.id == userId);

                        return (
                          <SchedulingCard
                            key={index}
                            id={id}
                            adTitle={adTitle}
                            campaignId={campaignId}
                            message={message}
                            username={user[0].name}
                            scheduledDate={scheduledDate}
                            ongName={ongName}
                            quantity={quantity}
                            message={message}
                          />
                        );
                      }
                    )
                  ) : (
                    <div className="campaign-cards">
                      <div className="not-yet">
                        Ainda não tem agendamentos de campanhas!
                      </div>
                    </div>
                  )}
                </div>
              </ProfileTitle>
            </Campaigns>
          </>
        )}
      </Container>
    </motion.div>
  );
};

export default OngProfile;
