import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home'
import Login from './containers/Login'
import Signup from './containers/Signup'
import ResetPassword from './containers/ResetPassword'
import ResetPasswordConfirm from './containers/ResetPasswordConfirm'
import Activate from './containers/Activate'

import { Provider } from 'react-redux'
import store from './store'

import Layout from './hocs/Layout'

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/cadastrar" component={Signup} />
                    <Route exact path="/recupera-senha" component={ResetPassword} />
                    <Route exact path="/senha/recuperar/confirmar/:uid/:token" component={ResetPasswordConfirm} />
                    <Route exact path="/activate/:uid/:token" component={Activate} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;