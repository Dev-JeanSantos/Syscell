import React from 'react';
import ButtonFormCancel from '../../../../core/components/ButtonFormCancel';
import ButtonFormLogin from '../../../../core/components/ButtonFormLogin';
import FormAuth from '../../../../core/components/FormAuth';
import './styles.scss'

const Cadastro = () => {

    return (
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
        </FormAuth>
    );
}

export default Cadastro;