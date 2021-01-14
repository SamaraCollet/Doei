import logo from "./logo.svg";
import "./App.css";
import CardsFeed from "./pages/cards-feed";
import Header from "./components/header";
import VoluntaryRegister from "./pages/voluntary-register";
import OngRegister from "./pages/ong-register";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <VoluntaryRegister />
      <CardsFeed />
      <OngRegister />
    </div>
  );
}

export default App;
