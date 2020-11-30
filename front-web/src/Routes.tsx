import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Celula from './pages/Celula';
import Home from './pages/Home';
import Igreja from './pages/Igreja';
import Sistema from './pages/Sistema';
const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>            
            <Route path="/sistema">
                <Sistema/>
            </Route>
            <Route path="/igreja">
                <Igreja/>
            </Route>
            <Route path="/celula">
                <Celula/>
            </Route>
            <Route path="/auth">
                <Auth/>
            </Route>
            <Route path="/admin">
                <Admin/>
            </Route>
        </Switch>
    </BrowserRouter>
    
)

export default Routes;