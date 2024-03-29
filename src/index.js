import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter} from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import './Login.css';
import Advertisement from './Advertisement';

ReactDOM.render(
    <BrowserRouter>
    <Advertisement/>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route path='/dashboard' component={Dashboard} />
            {/* <Route component={NotFound}/> */}
        </Switch>
    <Advertisement/>
    </BrowserRouter>,
    document.getElementById('root')
);