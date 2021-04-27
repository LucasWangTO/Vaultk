import React from 'react'
import UrlEnding from './UrlEnding'
import MainPage from './MainPage'
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return (
        <Switch>
            <Route exact path="/:ending" component={UrlEnding} />
            <Route exact path="/">
                <MainPage />
            </Route>
            <Redirect from="/" to="/" />
        </Switch>
    )
}

export default App;