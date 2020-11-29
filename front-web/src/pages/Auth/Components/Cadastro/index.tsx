import React from 'react';
import FormAuth from '../../../../core/components/FormAuth';
import './styles.scss'
import ButtonForm from '../../../../core/components/ButtonForm';

const Cadastro = () => {

    return (
        <div className="cadastro-container">
            <FormAuth textTitle="Faça o seu Cadastro">
                <form className="form-content">
                    <div className="form-label">Digite seu Nome Completo</div>
                    <input
                        type="text"
                        className="input-base"
                        placeholder="Nome Completo"
                    >
                    </input>
                    <div className="form-label">Digite seu Email</div>
                    <input
                        type="email"
                        className="input-base"
                        placeholder="Email"
                    >
                    </input>
                    <div className="form-label">Digite sua Senha</div>
                    <div className="form-password">
                        <input
                            type="password"
                            className="input-base col-5"
                            placeholder="Senha"
                        ></input>
                        <input
                            type="password"
                            className="input-base col-5"
                            placeholder="Repita Senha"
                        ></input>
                    </div>
                    <div className="container-button">
                        <div className="btn-cancelar">
                            <ButtonForm nameMenu="Cancelar" link="/auth/login" />
                        </div>
                        <div className="btn-login">
                            <ButtonForm nameMenu="Fazer Cadastro" link="#/" />
                        </div>
                    </div>
                </form>
            </FormAuth>
        </div>
    );
}

export default Cadastro;