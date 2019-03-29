import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Details from './pages/details';
import Character from './pages/character';
import Datasheet from './pages/datasheet';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/details/:id/synopsis" component={Details} />
            <Route path="/details/:id/datasheet" component={Datasheet} />
            <Route path="/details/:id/character" component={Character} />
        </Switch> 
    </BrowserRouter>
);

export default Routes;