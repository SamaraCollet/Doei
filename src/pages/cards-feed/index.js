import CampaignCard from "../../components/campaign-cards";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCampaigns } from "../../store/thunks";

const CardsFeed = () => {
  const campaigns = useSelector((state) => state.campaigns);
  // const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(campaigns);

  useEffect(() => {
    dispatch(getAllCampaigns());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, []);

  // console.log(users);
  return (
    <Container>
      <h2> Anúncios Recentes </h2>
      <DetailTitle />
      {campaigns.map(
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
      )}
    </Container>
  );
};

export default CardsFeed;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-content: center !important;
  align-items: center;
`;

export const DetailTitle = styled.div`
  background-color: #00bbf9;
  width: 80px;
  height: 3px;
  margin: 15px;
  align-self: center;
`;
