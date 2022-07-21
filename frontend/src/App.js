import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home'
import Login from './containers/Login'

import Layout from './hocs/Layout'

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </Layout>
    </Router>
);

export default App;