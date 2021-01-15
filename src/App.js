import GlobalStyle from "./styles/global";
import Header from "./components/header";
import LandingPage from "./pages/landing-page/index";
import AuthHeader from "./components/authHeader";
import VoluntaryRegister from "./pages/voluntary-register";
import OngRegister from "./pages/ong-register";
import "./App.css";

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
<<<<<<< HEAD
      <Header />
      {/* <LandingPage /> */}

      {/* <VoluntaryRegister /> */}
      <OngRegister />
=======
      <LandingPage />
      {/* <VoluntaryRegister /> */}
      {/* <OngRegister /> */}
>>>>>>> 40b7db2f4cd1276e426245ffd1f6df61d5e9a0d3
    </div>
  );
}

export default App;
