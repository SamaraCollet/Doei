import { Container, Info, Contact, Title, TitleCss, GifTab } from "./styled";
import ongPic from "../../images/ongPic.png";
import gif from "../../images/loading.gif";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { useSelector } from "react-redux";

const AdPage = () => {
  const [ad, setAd] = useState(null);
  const [ong, setOng] = useState(null);
  const [geo, setGeo] = useState({ lat: 0, lng: 0 });

  // const counter = useSelector((state) => state.campaigns);
  // console.log(counter);

  useEffect(() => {
    axios
      .get("https://capstone4-kenzie.herokuapp.com/campaigns/0")
      .then((res) => setAd(res.data));
  }, []);

  useEffect(() => {
    if (ad !== null) {
      axios
        .get(`https://capstone4-kenzie.herokuapp.com/ngos/${ad.userId}`)
        .then((res) => setOng(...res.data));
    }
  }, [ad]);

  //Get map info
  const containerStyle = {
    width: "400px",
    height: "400px",
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
    ong !== null &&
      getLocation(
        `${ong.address.city}, ${ong.address.streetName} ${ong.address.streetNumber}`
      );
  }, [ong]);

  return (
    <Container>
      <Header />
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
              <h1> {ong.ngoInfo.name} </h1>

              <h2> {ad.about} </h2>
            </div>
          </Info>
          <Contact>
            <div>
              <TitleCss>
                <h1>Contato</h1>
                <div />
              </TitleCss>
              <ul>
                <li>{ong.ngoInfo.name}</li>
                <li>{ong.email} </li>
                <li>9 9152-7936</li>
                <li>
                  <a href={ong.ngoInfo.website}>{ong.ngoInfo.website}</a>
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
      ) : (
        <GifTab>
          <img src={gif} alt="loading" />
        </GifTab>
      )}
    </Container>
  );
};

export default AdPage;
