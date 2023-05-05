import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../domain/paths/paths';

export const Request = () => {
    return (
        <div className="request">
            <div className="request__block">
                <div className="img__leff__blockReq">
                    <img
                        src="../img/auth__right.png"
                        alt="картинка слева"
                        className="img__left__req"
                    />
                </div>

                <div className="form__req">
                    <div className="head__data__righh-item">
                        <Link to={PATHS.HOME}> На главную страницу </Link>
                    </div>

                    <form className="form__req" action="НАПИШИ СЮДА САМ ЧЕ ТО">
                        <textarea
                            className="description"
                            id="description"
                            name="description"
                        ></textarea>
                        <input className="" type="text" id="login" placeholder="Оставьте заявку" />
                        <div className="buttonCallback">Отправить заявку</div>
                    </form>
                </div>
            </div>
        </div>
    );
};
