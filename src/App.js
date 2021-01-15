import GlobalStyle from "./styles/global";
import Header from "./components/header";
import LandingPage from "./pages/landing-page/index";
import AuthHeader from "./components/authHeader";
import VoluntaryRegister from "./pages/voluntary-register";
import OngRegister from "./pages/ong-register";
import "./App.css";
import AdPage from "./pages/ad-page";

function App() {
  return (
    <div>
      {/* <AdPage /> */}
      <LandingPage />
    </div>
  );
}

export default App;
