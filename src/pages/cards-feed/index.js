import CampaignCard from "../../components/campaign-cards";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCampaigns } from "../../store/thunks";
import { StyledTitle, Container, DetailTitle } from "./style";
const CardsFeed = () => {
  const campaigns = useSelector((state) => state.campaigns);
  // const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(campaigns);

  useEffect(() => {
    dispatch(getAllCampaigns());
  }, []);

  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, []);

  // console.log(users);
  return (
    <Container>
      <StyledTitle>Anúncios recentes para a sua localidade</StyledTitle>
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
