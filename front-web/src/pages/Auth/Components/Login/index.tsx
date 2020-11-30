import React from 'react';
import { useForm } from 'react-hook-form';
import FormAuth from '../../../../core/components/FormAuth';
import './styles.scss'
import ButtonForm from '../../../../core/components/ButtonForm';
import { makeLogin } from '../../../../core/utils/request';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

type FormSubmitData = {
    username: string;
    password: string;
}
const Login = () => {

    const { register, handleSubmit, errors } = useForm<FormSubmitData>();
    const history = useHistory();

    // const validationSchema = yup.object().shape({
    //     newPassword: yup.string()
    //       .required('New Password is required'),
    //     confirmPassword: yup.string()
    //       .required('Confirm Password is required')
    //       .oneOf([yup.ref('password'), null], 'Passwords does not match'),
    //   });

    const onSubmit = (data: FormSubmitData) => {
        makeLogin(data)
            .then(response => {
                toast.success('Usuário Logado com Sucesso!')
                history.push('/admin');
            })
            .catch(() => {
                toast.error('Erro no Login!')
            })
    }
    return (
        <div className="container-login">
            <FormAuth textTitle="Faça o seu Login">
                <form className="form-content" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-label">Digite seu Email</div>
                    <input
                        type="email"
                        className="input-base"
                        placeholder="Email"
                        name="username"
                        ref={register({
                            required: "Campo obrigatório",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Email inválido"
                            }
                          })}
                    />
                    {errors.username && (
                        <div className="invalid-feedback d-block ml-4">
                            {errors.username.message}
                        </div>
                    )}
                    <div className="form-label">Digite sua Senha</div>
                    <input
                        type="password"
                        className="input-base"
                        placeholder="Senha"
                        name="password"
                        ref={register({ 
                            required: "Campo obrigatório",
                            pattern: {
                                value: /((\\d)*([a-z])*([A-Z])*([@#$%])*){6,20}/i,
                                message: "Email inválido"
                              },
                            minLength:{ value: 5, message: 'O Campo tem que ter no mínimo 6 caracteres'},
                            maxLength:{ value: 10, message: 'O Campo tem que ter no maximo 10 caracteres'}
                        })}
                    />
                    {errors.password && (
                        <div className="invalid-feedback d-block ml-4">
                            {errors.password.message}
                        </div>
                    )}
                    <a href="/auth/recuperar" className="form-label-link">Esqueceu sua senha?</a>
                    <div className="container-button">
                        <div className="btn-cancelar">
                            <ButtonForm nameMenu="Cancelar" link="/" />
                        </div>
                        <div className="btn-login">
                            <ButtonForm nameMenu="Fazer Login" link="#" />
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