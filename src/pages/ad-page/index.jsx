import {
  Container,
  Info,
  Contact,
  Title,
  MapStyle,
  TitleCss,
  GifTab,
} from "./styled";
import ongPic from "../../images/ongPic.png";
import gif from "../../images/loading.gif";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import Header from "../../components/header";

//maps api
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 36.169941,
  lng: -115.139832,
};

const AdPage = () => {
  const [ad, setAd] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("https://capstone4-kenzie.herokuapp.com/campaigns/1")
      .then((res) => setAd(res.data));
  }, []);

  console.log(user);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDCyOJQ3X5-Et_YZq--Eh7wYumIrvzlw_o",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <Container>
      <Header />
      {ad !== undefined ? (
        <>
          <Title>
            <TitleCss>
              <h1>{ad.title}</h1>
              <div></div>
            </TitleCss>
          </Title>
          <Info>
            <img src={ongPic} />
            <div>
              <h1> ONG NAME </h1>

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
                <li>Respondável: </li>
                <li>Email: </li>
                <li>Telefone: </li>
                <li>Website: </li>
              </ul>
            </div>
            <div>
              {isLoaded && (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  {/* Child components, such as markers, info windows, etc. */}
                  <></>
                </GoogleMap>
              )}
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
