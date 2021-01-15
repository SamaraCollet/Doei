import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBj8LCYAcsyOtQ7TNihTnP7kPMOVhtnqV0");

Geocode.setLanguage("pt");

Geocode.enableDebug();

const geoLocation = (address) => {
  Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );
};

export default geoLocation;
