import CampaignCard from "../../components/campaign-cards";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCampaigns } from "../../store/thunks";
import { StyledTitle, Container, DetailTitle } from "./style";
import {useParams, Link} from "react-router-dom"

const CampaingsFeed = () => {
  const campaigns = useSelector((state) => state.campaigns);
  const dispatch = useDispatch();
  const {city}  = useParams()

  useEffect(() => {
    dispatch(getAllCampaigns());
  }, []);

  return (
    <Container>
      <StyledTitle>Anúncios recentes</StyledTitle>
      <DetailTitle />
      { city === "Curitiba" ? campaigns.map(
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
          )
        }) : <div>Nenhuma campanha encontrada em {city}. <Link to="/">Voltar</Link>
             </div>}
    </Container> 
  );
};

export default CampaingsFeed;
