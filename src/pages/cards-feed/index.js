import CampaignCard from "../../components/campaign-cards";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCampaigns } from "../../store/thunks";
const CardsFeed = () => {
  const campaigns = useSelector((state) => state.campaigns);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCampaigns());
  }, []);

  return (
    <Container>
      {campaigns.map(
        ({ title, about, initialDate, endDate, donationType }, index) => {
          return (
            <CampaignCard
              key={index}
              title={title}
              initialDate={initialDate}
              endDate={endDate}
              about={about}
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
`;
