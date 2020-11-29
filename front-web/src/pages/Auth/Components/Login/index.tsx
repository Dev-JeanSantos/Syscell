import React from 'react';
import FormAuth from '../../../../core/components/FormAuth';
import './styles.scss'
import ButtonForm from '../../../../core/components/ButtonForm';

const Login = () => {

    return (
        <div className="container-login">
            <FormAuth textTitle="Faça o seu Login">
                <form className="form-content">
                    <div className="form-label">Digite seu Email</div>
                    <input
                        type="email"
                        className="input-base"
                        placeholder="Email"
                    >
                    </input>
                    <div className="form-label">Digite sua Senha</div>
                    <input
                        type="password"
                        className="input-base"
                        placeholder="Senha"
                    ></input>
                    <a href="/auth/recuperar" className="form-label-link">Esqueceu sua senha?</a>
                    <div className="container-button">
                        <div className="btn-cancelar">
                            <ButtonForm nameMenu="Cancelar" link="/" />
                        </div>
                        <div className="btn-login">
                            <ButtonForm nameMenu="Fazer Login" link="#/" />
                        </div>
                    </div>
                </form>

                <div className="msg-cadastro">
                    <h5>
                        Esta é sua primeira vez aqui?
                        <a href="/auth/cadastro"> Faça seu cadastro! </a>
                    </h5>
                </div>

            </FormAuth>

        </div>
    );
}

export default Login;