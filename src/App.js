import Header from "./components/header";
import AuthHeader from "./components/authHeader";
import VoluntaryRegister from "./pages/voluntary-register";
import OngRegister from "./pages/ong-register";
import "./App.css";
import AdPage from "./pages/ad-page";

function App() {
  return (
    <div>
      <AdPage />
      {/* <VoluntaryRegister />
      <OngRegister /> */}
    </div>
  );
}

export default App;
