import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from '../../core/components/Navbar';
import { ReactComponent as AuthImage } from './../../core/assets/imagens/auth.svg';
import Cadastro from './Components/Cadastro';
import Login from './Components/Login';
import Recuperar from './Components/Recuperar';
import './styles.scss'
const Auth = () => {

    return (
        <Fragment>
            <Navbar />
            <div className="auth-container">
                <div className="col-6 auth-container-left">
                    <div className="auth-info">
                        <h1 className="auth-info-title">
                            Para obter mais acesso ao site, <br /> faça seu login agora!
                    </h1>
                        <div className="container-imag">
                            < AuthImage className="container-image" />
                        </div>
                    </div>
                </div>
                <div className="col-6 auth-container-right">
                   <Switch>
                       <Route path="/auth/login">
                           <Login/>
                       </Route>                       
                       <Route path="/auth/cadastro">
                          <Cadastro/>
                       </Route>                       
                       <Route path="/auth/recuperar">
                           <Recuperar/>
                       </Route>                       
                   </Switch>
                </div>
            </div>
        </Fragment>
    );
}

export default Auth;