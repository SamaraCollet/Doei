import Header from "./components/header";
import AuthHeader from "./components/authHeader";
import VoluntaryRegister from "./pages/voluntary-register";
import OngRegister from "./pages/ong-register";
import "./App.css";

function App() {
  return (
    <div>
      <VoluntaryRegister />
      <OngRegister />
    </div>
  );
}

export default App;
