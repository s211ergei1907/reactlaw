import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../domain/paths/paths';
import { BaseInput } from '../../components/base-input/base-input.component';
import { useRegistrationMutation } from '../../../usecases/registration/registration';
import { QUERY_KEYS } from '../../../domain/query/query-keys';

export const SignIn = () => {
    const { mutate, isLoading } = useRegistrationMutation([QUERY_KEYS.GET_INFO_QUERY]);

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
                            <p>У вас еще нет аккаунта?</p>
                            <Link to={PATHS.SIGN_UP}> Зарегистрироваться </Link>
                        </div>
                    </div>

                    <div className="data__input">
                        <div className="data">
                            <BaseInput id="login" placeholder="Email" />
                            <BaseInput type="password" id="login" placeholder="password" />
                            <div className="buttonCallback" onClick={() => mutate({ id: 1 })}>
                                Войти
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
