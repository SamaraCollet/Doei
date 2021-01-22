import CampaignCard from "../../components/campaign-cards";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCampaigns } from "../../store/thunks";
import { StyledTitle, Container, DetailTitle } from "./style";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const CampaingsFeed = () => {
  const campaigns = useSelector((state) => state.campaigns);
  const dispatch = useDispatch();
  const { city } = useParams();
  const cityFilter = city;

  useEffect(() => {
    dispatch(getAllCampaigns());
  }, []);

  let filterCuritiba = campaigns.filter((e) => e.location === "Curitiba");
  let filterSaoPaulo = campaigns.filter((e) => e.location === "São Paulo");
  let filterRio = campaigns.filter((e) => e.location === "Rio de Janeiro");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Container>
        <StyledTitle>Anúncios recentes</StyledTitle>
        <DetailTitle />

        {city === undefined ? (
          campaigns.map(
            ({ title, about, endDate, location, ongName, id }, index) => {
              return (
                <CampaignCard
                  key={index}
                  title={title}
                  ongName={ongName}
                  location={location}
                  endDate={`${endDate.slice(8, 10)}/${endDate.slice(
                    5,
                    7
                  )}/${endDate.slice(0, 4)}`}
                  about={about}
                  id={id}
                />
              );
            }
          )
        ) : cityFilter === "Curitiba" && filterCuritiba !== [] ? (
          filterCuritiba.map(
            ({ title, about, endDate, location, ongName, id }, index) => {
              return (
                <CampaignCard
                  key={index}
                  title={title}
                  ongName={ongName}
                  location={location}
                  endDate={`${endDate.slice(8, 10)}/${endDate.slice(
                    5,
                    7
                  )}/${endDate.slice(0, 4)}`}
                  about={about}
                  id={id}
                />
              );
            }
          )
        ) : cityFilter === "São Paulo" && filterSaoPaulo !== [] ? (
          filterSaoPaulo.map(
            ({ title, about, endDate, location, ongName, id }, index) => {
              return (
                <CampaignCard
                  key={index}
                  title={title}
                  ongName={ongName}
                  location={location}
                  endDate={`${endDate.slice(8, 10)}/${endDate.slice(
                    5,
                    7
                  )}/${endDate.slice(0, 4)}`}
                  about={about}
                  id={id}
                />
              );
            }
          )
        ) : cityFilter === "Rio de Janeiro" && filterRio !== [] ? (
          filterRio.map(
            ({ title, about, endDate, location, ongName, id }, index) => {
              return (
                <CampaignCard
                  key={index}
                  title={title}
                  ongName={ongName}
                  location={location}
                  endDate={`${endDate.slice(8, 10)}/${endDate.slice(
                    5,
                    7
                  )}/${endDate.slice(0, 4)}`}
                  about={about}
                  id={id}
                />
              );
            }
          )
        ) : (
          <div className="not-found">
            <img src="/assets/location.png" alt="location" />
            Nenhuma campanha encontrada em {city}.{" "}
            <Link className="link" to="/">
              Voltar
            </Link>
          </div>
        )}
      </Container>
    </motion.div>
  );
};

export default CampaingsFeed;
