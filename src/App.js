import PageNotFound from './pages/page-not-found';
import NotAuthorized from './pages/not-authorized'
import Routes from './routes'
import GlobalStyle from "./styles/global";
<<<<<<< HEAD
import LandingPage from "./pages/landing-page/index";
import "./App.css";
import AdPage from "./pages/ad-page";

import { Switch, Route } from "react-router-dom";
import OngRegister from "./pages/ong-register";
import VoluntaryRegister from "./pages/voluntary-register";
import Login from "./pages/login";
import CampaignCard from "./components/campaign-cards";
const App = () => {
  return (
    <>
      <CardsFeed />
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cadastro-ong">
          <OngRegister />
        </Route>
        <Route path="/cadastro-voluntario">
          <VoluntaryRegister />
        </Route>
      </Switch>
=======

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Routes/>
>>>>>>> 39c3a711f1c81509ac0a35baf8eb50c9d0e022b7
    </>
  );
};

export default App;
