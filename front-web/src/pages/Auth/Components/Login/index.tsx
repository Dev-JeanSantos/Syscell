import React from 'react';
import ButtonFormCancel from '../../../../core/components/ButtonFormCancel';
import ButtonFormLogin from '../../../../core/components/ButtonFormLogin';
import FormAuth from '../../../../core/components/FormAuth';
import './styles.scss'

const Login = () => {

    return (
        <div>
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
                        <ButtonFormCancel nameMenu="Cancelar" link="/" />
                        <ButtonFormLogin nameMenu="Fazer Login" link="#/" />
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