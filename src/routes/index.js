import LandingPage from '../pages/landing-page'
import VoluntaryLogin from '../pages/voluntary-login'
import OngRegister from '../pages/ong-register'
import VoluntaryRegister from '../pages/voluntary-register'

import { Switch, Route } from "react-router-dom"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route path="/login-voluntario">
                <VoluntaryLogin/>
            </Route>
            <Route path="/cadastro-ong">
                <OngRegister/>
            </Route>
            <Route path="/cadastro-voluntario">
                <VoluntaryRegister/>
            </Route>
        </Switch>
    )
}

export default Routes