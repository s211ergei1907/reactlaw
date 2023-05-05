import React from 'react';
import '../sass/main.scss';
import logoSVG from '../../img/logo.svg';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../domain/paths/paths';
import { useGetInfo } from '../../../usecases/get-info/get-info';

export const Main = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="first__block">
                <nav className="nav">
                    <div className="container">
                        <div className="nav__row">
                            <div className="logo">
                                <img src={logoSVG} alt="Картинка лого" />
                                <div className="text__logo">
                                    <h1>Поздеев и партнёры</h1>
                                    <p>только лучшие специалисты</p>
                                </div>
                            </div>
                            <div className="navigation">
                                <ul>
                                    <li>Обо мне</li>
                                    <li>Команда</li>
                                    <li>Сотрудничество</li>
                                    <li>Услуги</li>
                                </ul>
                            </div>
                            <div className="authentication">
                                <div className="sign__up" onClick={() => navigate(PATHS.SIGN_UP)}>
                                    Регистрация
                                </div>
                                <div className="sign__in" onClick={() => navigate(PATHS.SIGN_IN)}>
                                    Вход
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="callBack">
                    <div className="container">
                        <div className="callBack__block">
                            <h1>Найди своего юриста</h1>
                            <p>
                                В нашей команде только первоклассные специалисты, которые выиграли
                                не один десяток дел. Мы работаем как с физическими , так и с
                                юридическими лицами.
                            </p>
                            <div
                                className="buttonCallback"
                                onClick={() => navigate(PATHS.REQUESTS)}
                            >
                                Оставить заявку
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutMe">
                <div className="container">
                    <div className="aboutMe__block">
                        <div className="aboutMe__block__text">
                            <h1>Обо мне</h1>
                            <p>
                                Меня зовут Денис Поздеев. У меня два образования по юриспруденции в
                                НИУ "Высшая школа экономики" в Санкт-Петербурге и в Москве. Имею
                                различные награды, в т.ч. от Правительства Санкт-Петербурга.
                            </p>
                            <p>
                                Профильно занимаюсь сопровождением бизнеса по различным правовым
                                вопросам, в особенности по вопросам разрешения споров.
                            </p>

                            <p>
                                У меня много коллег, которые имеют экспертизу как от разрешения
                                международных споров, градостроительного права, морского права до
                                корпоративного права и разрешения споров в судах всех уровней.
                            </p>
                        </div>
                        <div className="aboutMe__block__photo">
                            <div className="mePhoto">
                                <img
                                    className="mePhotoImg"
                                    src="./img/denPozdeev.png"
                                    alt="Денис глава компании(фото)"
                                />
                            </div>
                            <div className="contactBlockPhoto">
                                <a href="https://web.telegram.org/z/#696102250">
                                    <img src="./img/telegram.svg" alt="telegram" />
                                </a>
                                <a href="https://vk.com/pozdeevdv">
                                    <img src="./img/vk.svg" alt="vk" />
                                </a>
                                <a href="./">
                                    <img src="./img/youtube.svg" alt="youtube" />
                                </a>
                                <a href="./">
                                    <img src="./img/telefon.svg" alt="telefon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team">
                <div className="container">
                    <h2>Команда</h2>
                    <div className="team__blocks">
                        <div className="team__block">
                            <img src="./img/team_1.png" alt="Тут лицо" className="team__photo" />
                            <div className="team__information">
                                <img src="./img/polygon.png" alt="Треугольник тут был раньше" />
                                <div className="team__block__text">
                                    <h3>Денис Поздеев</h3>
                                    <p>Директор компании</p>
                                </div>
                            </div>
                        </div>

                        <div className="team__block">
                            <img src="./img/team_2.png" alt="Тут лицо" className="team__photo" />
                            <div className="team__information">
                                <img src="./img/polygon.png" alt="Треугольник тут был раньше" />
                                <div className="team__block__text">
                                    <h3>Сергей Поздеев</h3>
                                    <p>Менеджер компании</p>
                                </div>
                            </div>
                        </div>

                        <div className="team__block">
                            <img src="./img/team_3.png" alt="Тут лицо" className="team__photo" />
                            <div className="team__information">
                                <img src="./img/polygon.png" alt="Треугольник тут был раньше" />
                                <div className="team__block__text">
                                    <h3>Константин Харионовский</h3>
                                    <p>Backend-разработчик</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cooperation">
                <div className="container">
                    <h2>Сотрудничество</h2>
                    <div className="cooperation__blocks">
                        <div className="cooperation__block">
                            <img
                                src="./img/cooperation_1.png"
                                alt="здесь маленький кружочек должен"
                            />
                            <h3>Заявка</h3>
                            <p>Вы оставляете заявку у нас на сайте и описываете свою проблему</p>
                        </div>
                        <div className="cooperation__block">
                            <img
                                src="./img/cooperation_2.png"
                                alt="здесь маленький кружочек должен"
                            />
                            <h3>Обсуждение</h3>
                            <p>Мы обсуждаем с вами возникшие вопросы по вашему делу</p>
                        </div>
                        <div className="cooperation__block">
                            <img
                                src="./img/cooperation_3.png"
                                alt="здесь маленький кружочек должен"
                            />
                            <h3>Звонок или встреча</h3>
                            <p>
                                Назначаем встречу в условленном Вами месте или делаем звонок в
                                мессенджере
                            </p>
                        </div>
                        <div className="cooperation__block">
                            <img
                                src="./img/cooperation_4.png"
                                alt="здесь маленький кружочек должен"
                            />
                            <h3>Договор</h3>
                            <p>Заключаем договор о сотрудничестве</p>
                        </div>
                        <div className="cooperation__block">
                            <img
                                src="./img/cooperation_5.png"
                                alt="здесь маленький кружочек должен"
                            />
                            <h3>Наша работа</h3>
                            <p>Наши специалисты работают с вашим делом</p>
                        </div>
                        <div className="cooperation__block">
                            <img
                                src="./img/cooperation_6.png"
                                alt="здесь маленький кружочек должен"
                            />
                            <h3>Принятие работы</h3>
                            <p>Мы подписываем акт выполненных работ</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services">
                <div className="container">
                    <h2>Услуги</h2>
                    <div className="services__blocks">
                        <div className="services__block">
                            <img src="./img/service_1.jpg" alt="картинка в услугах" />
                            <div className="services__block__content">
                                <h3>Краткое описание услуги</h3>
                                <p>
                                    Вот тут кратко опишем услугу, которую твоя компания будет
                                    предоставлять
                                </p>
                                <h4>150 тыс. руб.</h4>
                                <a href="./request/request.html">
                                    {' '}
                                    <div className="buttonCallback buttonCallback__service">
                                        Оставить заявку
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="services__block">
                            <img src="./img/service_2.jpg" alt="картинка в услугах" />
                            <div className="services__block__content">
                                <h3>Краткое описание услуги</h3>
                                <p>
                                    Вот тут кратко опишем услугу, которую твоя компания будет
                                    предоставлять
                                </p>
                                <h4>150 тыс. руб.</h4>
                                <a href="./request/request.html">
                                    {' '}
                                    <div className="buttonCallback buttonCallback__service">
                                        Оставить заявку
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="services__block">
                            <img src="./img/service_3.jpg" alt="картинка в услугах" />
                            <div className="services__block__content">
                                <h3>Краткое описание</h3>
                                <p>
                                    Вот тут кратко опишем услугу, которую твоя компания будет
                                    предоставлять
                                </p>
                                <h4>150 тыс. руб.</h4>
                                <a href="./request/request.html">
                                    {' '}
                                    <div className="buttonCallback buttonCallback__service">
                                        Оставить заявку
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="services__block">
                            <img src="./img/service_4.jpg" alt="картинка в услугах" />
                            <div className="services__block__content">
                                <h3>Краткое описание</h3>
                                <p>
                                    Вот тут кратко опишем услугу, которую твоя компания будет
                                    предоставлять
                                </p>
                                <h4>150 тыс. руб.</h4>
                                <a href="./request/request.html">
                                    {' '}
                                    <div className="buttonCallback buttonCallback__service">
                                        Оставить заявку
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="services__block">
                            <img src="./img/service_5.jpg" alt="картинка в услугах" />
                            <div className="services__block__content">
                                <h3>Краткое описание</h3>
                                <p>
                                    Вот тут кратко опишем услугу, которую твоя компания будет
                                    предоставлять
                                </p>
                                <h4>150 тыс. руб.</h4>
                                <a href="./request/request.html">
                                    {' '}
                                    <div className="buttonCallback buttonCallback__service">
                                        Оставить заявку
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="services__block">
                            <img src="./img/service_6.jpg" alt="картинка в услугах" />
                            <div className="services__block__content">
                                <h3>Краткое описание</h3>
                                <p>
                                    Вот тут кратко опишем услугу, которую твоя компания будет
                                    предоставлять
                                </p>
                                <h4>150 тыс. руб.</h4>
                                <a href="./request/request.html">
                                    {' '}
                                    <div className="buttonCallback buttonCallback__service">
                                        Оставить заявку
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
