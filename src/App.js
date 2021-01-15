import CardsFeed from "./pages/cards-feed";
import GlobalStyle from "./styles/global";
import LandingPage from "./pages/landing-page/index";
import Header from "./components/header";
import AuthHeader from "./components/authHeader";
import VoluntaryRegister from "./pages/voluntary-register";
import OngRegister from "./pages/ong-register";
import "./App.css";

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <LandingPage />
      <VoluntaryRegister />
      <CardsFeed />
      <OngRegister />
    </div>
  );
}

export default App;
