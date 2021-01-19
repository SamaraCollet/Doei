import LandingPage from "../pages/landing-page";
import VoluntaryLogin from "../pages/voluntary-login";
import VoluntaryRegister from "../pages/voluntary-register";
import OngLogin from "../pages/ong-login";
import OngRegister from "../pages/ong-register";
import VoluntaryProfile from "../pages/voluntary-profile";
import AdPage from "../pages/ad-page";
import PageNotFound from "../pages/page-not-found";

import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
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
      <Route exact path="/dashboard-voluntario">
        <VoluntaryProfile />
      </Route>
      <Route exact path="/anuncio/:id">
        <AdPage />
      </Route>
    </Switch>
  );
};

export default Routes;
