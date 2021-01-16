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
      <Header />
      {/* <LandingPage /> */}

      {/* <VoluntaryRegister /> */}
      <OngRegister />
      <LandingPage />
      {/* <VoluntaryRegister /> */}
      {/* <OngRegister /> */}
    </div>
  );
}

export default App;
