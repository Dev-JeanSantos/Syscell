import React from 'react';
import FormAuth from '../../../../core/components/FormAuth';
import './styles.scss'
import ButtonForm from '../../../../core/components/ButtonForm';
import { useForm } from 'react-hook-form';
import { makeRequest } from '../../../../core/utils/request';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

type formState = {
    name: string,
    email: string,
    password: string
}

const Cadastro = () => {

    const { register, handleSubmit, errors } = useForm<formState>();

    const history = useHistory();

    const onSubmit = (data: formState) => {

        makeRequest({ url: '/users', method: 'POST', data })
            .then(response => {
                toast.success('Usuário Cadastrado com Sucesso!')
                history.push('/auth/login')
            })
            .catch(() => {
                toast.error('Erro ao cadastrar usuário!')
            })
    }

    return (
        <div className="cadastro-container">
            <FormAuth textTitle="Faça o seu Cadastro">
                <form className="form-content" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-label">Digite seu Nome Completo</div>
                    <input
                        ref={register({
                            required: "Campo Obrigatório",
                            minLength: { value: 5, message: 'O Campo tem que ter no mínimo 6 caracteres' },
                            maxLength: { value: 10, message: 'O Campo tem que ter no maximo 10 caracteres' }
                        })}
                        name="name"
                        type="text"
                        className="input-base"
                        placeholder="Nome Completo"
                    >
                    </input>
                    {errors.name && (
                        <div className="invalid-feedback d-block ml-4 border">
                            {errors.name.message}
                        </div>
                    )}
                    <div className="form-label">Digite seu Email</div>
                    <input
                        ref={register({
                            required: "Campo Obrigatório",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                        name="email"
                        type="email"
                        className="input-base"
                        placeholder="Email"
                    >
                    </input>
                    {errors.email && (
                        <div className="invalid-feedback d-block ml-4">
                            {errors.email.message}
                        </div>
                    )}
                    <div className="form-label">Digite sua Senha</div>
                    <div className="form-password">
                        <input
                            ref={register({
                                required: "Campo Obrigatório",
                                minLength: { value: 6, message: 'O Campo tem que ter no mínimo 6 caracteres' },
                                maxLength: { value: 10, message: 'O Campo tem que ter no maximo 10 caracteres' }
                            })}
                            name="password"
                            type="password"
                            className="input-base col-5"
                            placeholder="Senha"
                        ></input>
                        <input
                            ref={register({
                                required: "Campo Obrigatório",
                                minLength: { value: 6, message: 'O Campo tem que ter no mínimo 6 caracteres' },
                                maxLength: { value: 10, message: 'O Campo tem que ter no maximo 10 caracteres' }
                            })}
                            name="password2"
                            type="password"
                            className="input-base col-5"
                            placeholder="Repita Senha"
                        ></input>
                    </div>
                    {errors.password && (
                        <div className="invalid-feedback d-block ml-4">
                            {errors.password.message}
                        </div>
                    )}
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