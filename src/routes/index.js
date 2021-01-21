import LandingPage from "../pages/landing-page";
import VoluntaryLogin from "../pages/voluntary-login";
import VoluntaryRegister from "../pages/voluntary-register";
import VoluntaryProfile from "../pages/voluntary-profile";
import OngLogin from "../pages/ong-login";
import OngRegister from "../pages/ong-register";
import CampaignsFeed from "../pages/campaigns-feed";
import AdPage from "../pages/ad-page";
import PageNotFound from "../pages/page-not-found";
import Header from "../components/header";
import AuthHeader from "../components/auth-header";
import NotAuthorized from "../pages/not-authorized";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../store/thunks";
import { useEffect } from "react";

import { AnimatePresence } from "framer-motion";

import Footer from "../components/footer";
import { Switch, Route } from "react-router-dom";
import OngProfile from "../pages/ong-profile";

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.hasOwnProperty("currentUserId")
      ? dispatch(getCurrentUser(localStorage.getItem("currentUserId")))
      : dispatch(getCurrentUser(""));
  }, []);

  const logged = useSelector((state) => state.users.data);

  return (
    <AnimatePresence>
      {!!logged ? (
        <>
          <AuthHeader />
          <Switch>
            <Route exact path="/">
              <LandingPage />
              <Footer />
            </Route>
            <Route exact path="/campaigns-feed/:city">
              <CampaignsFeed />
            </Route>
            <Route path="/campaigns-feed">
              <CampaignsFeed />
            </Route>
            <Route exact path="/campaign/:id">
              <AdPage />
            </Route>
            <Route path="/perfil-ong">
              <OngProfile />
            </Route>
            <Route exact path="/perfil-voluntario">
              <VoluntaryProfile />
              <Footer />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </>
      ) : (
        <>
          <Header />
          <Switch>
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
            <Route exact path="/campaigns-feed/:city">
              <CampaignsFeed />
            </Route>
            <Route path="/campaigns-feed">
              <CampaignsFeed />
            </Route>
            <Route exact path="/campaign/:id">
              <AdPage />
            </Route>
            <Route path="/perfil-ong">
              <NotAuthorized />
            </Route>
            <Route exact path="/perfil-voluntario">
              <NotAuthorized />
              <Footer />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </>
      )}
    </AnimatePresence>
  );
};

export default Routes;
