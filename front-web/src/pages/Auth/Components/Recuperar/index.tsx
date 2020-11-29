import React from 'react';
import FormAuth from '../../../../core/components/FormAuth';
import './styles.scss'
import ButtonForm from '../../../../core/components/ButtonForm';

const Recuperar = () => {

    return (
        <div className="container-recuperar">
            <FormAuth textTitle="Recuperação de Senha">
                <form className="container-recuperar">
                    <div className="form-label">Digite seu Email</div>
                    <input
                        type="email"
                        className="input-base"
                        placeholder="Email"
                    >
                    </input>
                    <div className="container-button container-recuperar-button">
                        <div className="btn-cancelar">
                            <ButtonForm nameMenu="Cancelar" link="/auth/login" />
                        </div>
                        <div className="btn-login">
                            <ButtonForm nameMenu="Fazer Login" link="#/" />
                        </div>
                    </div>
                </form>
            </FormAuth>
        </div>
    );
}

export default Recuperar;