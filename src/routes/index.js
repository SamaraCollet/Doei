import LandingPage from "../pages/landing-page";
import VoluntaryLogin from "../pages/voluntary-login";
import VoluntaryRegister from "../pages/voluntary-register";
import OngLogin from "../pages/ong-login";
import OngRegister from "../pages/ong-register";
import CardsFeed from "../pages/cards-feed";

import { Switch, Route } from "react-router-dom";
import PageNotFound from "../pages/page-not-found";
import AdPage from "../pages/ad-page";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/campaigns-feed">
        <CardsFeed />
      </Route>
      <Route exact path="/campaign/:id">
        <AdPage />
      </Route>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/login-ong">
        <OngLogin />
      </Route>
      <Route path="/login-voluntario">
        <VoluntaryLogin />
      </Route>
      <Route path="/cadastro-ong">
        <OngRegister />
      </Route>
      <Route path="/cadastro-voluntario">
        <VoluntaryRegister />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
