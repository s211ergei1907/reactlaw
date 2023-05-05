import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../domain/paths/paths';
import { BaseInput } from '../../components/base-input/base-input.component';
import { useRegistrationMutation } from '../../../usecases/registration/registration';
import { Form, Field } from 'react-final-form';

export const SignUp = () => {
    const { mutate, isLoading } = useRegistrationMutation();

    return (
        <div className="auth">
            <div className="auth__block">
                <div className="img__left">
                    <img
                        src="../img/auth__right.png"
                        alt="картинка слева"
                        className="img__left_auth"
                    />
                </div>
                <div className="form__data__right">
                    <div className="head__data__right">
                        <div className="head__data__righh-item">
                            <Link to={PATHS.HOME}> На главную страницу </Link>
                        </div>
                        <div className="head__data__righh-item">
                            <p>У вас уже есть аккаунт?</p>
                            <Link to={PATHS.SIGN_IN}> Войти </Link>
                        </div>
                    </div>
                    <div className="data__input">
                        <div className="data">
                            <BaseInput placeholder="Имя" id="name" />
                            <BaseInput placeholder="Фамилия" id="surname" />
                            <BaseInput placeholder="Отчество" id="fatherland" />
                            <BaseInput placeholder="Телефон" id="phone" />
                            <BaseInput placeholder="Email" id="email" />
                            <BaseInput type="password" id="pas1" placeholder="password" />
                            <BaseInput type="password" id="pas2" placeholder="password" />
                            <div className="buttonCallback">Зарегистрироваться</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
