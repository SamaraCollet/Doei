import GlobalStyle from "./styles/global";
import LandingPage from "./pages/landing-page/index";
import "./App.css";
import AdPage from "./pages/ad-page";

import { Switch, Route } from "react-router-dom"
import OngRegister from "./pages/ong-register";
import VoluntaryRegister from "./pages/voluntary-register";
import Login from "./pages/login";

const App = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>

<Switch>
<Route exact path="/">
      <LandingPage />
</Route>
  <Route path="/login">
    <Login/>
  </Route>
<Route path="/cadastro-ong">
<OngRegister/>
</Route>
<Route path="/cadastro-voluntario">
<VoluntaryRegister/>
</Route>
</Switch>
    </>
  );
}

export default App;
