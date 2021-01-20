import LandingPage from "../pages/landing-page";
import VoluntaryLogin from "../pages/voluntary-login";
import VoluntaryRegister from "../pages/voluntary-register";
import VoluntaryProfile from "../pages/voluntary-profile";
import OngLogin from "../pages/ong-login";
import OngRegister from "../pages/ong-register";
import CardsFeed from "../pages/cards-feed";
import AdPage from "../pages/ad-page";
import PageNotFound from "../pages/page-not-found";

import Footer from "../components/footer";
import { Switch, Route } from "react-router-dom";

import AuthHeader from "../components/auth-header/index";
import OngProfile from "../pages/ong-profile";
const Routes = () => {
  return (
    <>
      <AuthHeader />

      <Switch>
        <Route exact path="/campaigns-feed">
          <CardsFeed />
        </Route>
        <Route exact path="/campaign/:id">
          <AdPage />
        </Route>
        <Route exact path="/">
          <LandingPage />
          <Footer />
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
        <Route exact path="/dashboard-voluntario">
          <VoluntaryProfile />
          <Footer />
        </Route>
        <Route exact path="/dashboard-ong">
          <OngProfile />
          <Footer />
        </Route>
        <Route exact path="/campaign/:id">
          <AdPage />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      {/* <Footer/> */}
    </>
  );
};

export default Routes;
