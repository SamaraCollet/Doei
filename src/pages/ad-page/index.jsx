import { Container, Info, Contact, Title, TitleCss, GifTab } from "./styled";
import ongPic from "../../images/ongPic.png";
import gif from "../../images/loading.gif";
import IdNotFound from "../page-not-found";
import { useEffect, useState } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { useParams } from "react-router-dom";

import Agendamento from "../../components/modal";

const AdPage = () => {
  const [ad, setAd] = useState(null);
  const [ong, setOng] = useState(null);
  const [geo, setGeo] = useState({ lat: 0, lng: 0 });
  const [wrongId, setWrongId] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://capstone4-kenzie.herokuapp.com/campaigns/${id}`)
      .then((res) => setAd(res.data))
      .catch((err) => setWrongId(true));
  }, []);

  useEffect(() => {
    if (ad !== null) {
      axios
        .get(`https://capstone4-kenzie.herokuapp.com/ngos/${ad.userId}`)
        .then((res) => setOng(...res.data));
    }
  }, [ad]);
  console.log(ong, ad);
  //Get map info

  const containerStyle = {
    width: `400px`,
    height: `400px`,
  };

  const center = {
    lat: geo.lat,
    lng: geo.lng,
  };

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  //Get lat and long
  Geocode.setApiKey("AIzaSyBj8LCYAcsyOtQ7TNihTnP7kPMOVhtnqV0");

  Geocode.setLanguage("pt");

  Geocode.enableDebug();

  const getLocation = (address) => {
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setGeo({ lat: lat, lng: lng });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  useEffect(() => {
    ong !== null && getLocation(`${ad.location}`);
  }, [ong]);

  return (
    <Container>
      {ad && ong !== null ? (
        <>
          <Title>
            <TitleCss>
              <h1>{ad.title}</h1>
              <div></div>
            </TitleCss>
          </Title>
          <Info>
            <img src={ongPic} alt="ONG" />
            <div>
              <h1> {ong.name} </h1>
              <h2> {ad.about} </h2>
              <Agendamento id={id} />
            </div>
          </Info>
          <Contact>
            <div>
              <TitleCss>
                <h1>Contato</h1>
                <div />
              </TitleCss>
              <ul>
                <li>{ong.name && ong.name}</li>
                <li>{ong.email && ong.email} </li>
                <li>{ong.phoneNumber && ong.phoneNumber}</li>
                <li>
                  <a href={ong.site}>{ong.site}</a>
                </li>
              </ul>
            </div>
            <div>
              <LoadScript googleMapsApiKey="AIzaSyBj8LCYAcsyOtQ7TNihTnP7kPMOVhtnqV0">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={15}
                >
                  <Marker onLoad={onLoad} position={center} />
                </GoogleMap>
              </LoadScript>
            </div>
          </Contact>
        </>
      ) : wrongId ? (
        <IdNotFound />
      ) : (
        <GifTab>
          <img src={gif} alt="loading" />
        </GifTab>
      )}
    </Container>
  );
};

export default AdPage;
