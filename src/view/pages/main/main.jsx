import React from 'react'
import '../sass/main.scss';
import logoSVG from '../../img/logo.svg';
export const Main = () => {
  return (
    <>
      <div class="first__block">
      <nav class="nav">
        <div class="container">
          <div class="nav__row">
            <div class="logo">
              <img src={logoSVG} alt="Картинка лого" />
              <div class="text__logo">
                <h1>Поздеев и партнёры</h1>
                <p>только лучшие специалисты</p>
              </div>
            </div>
            <div class="navigation">
              <ul>
                <li>Обо мне</li>
                <li>Команда</li>
                <li>Сотрудничество</li>
                <li>Услуги</li>
              </ul>
            </div>
            <div class="authentication">
              <a href="./autorization/signUp.html"><div class="sign__up">Регистрация</div></a>
              <a href="./autorization/signIn.html"><div class="sign__in">Вход</div></a>
            </div>
          </div>
        </div>
      </nav>

      <div class="callBack">
        <div class="container">
          <div class="callBack__block">
            <h1>Найди своего юриста</h1>
            <p>
              В нашей команде только первоклассные специалисты, которые выиграли
              не один десяток дел. Мы работаем как с физическими , так и с
              юридическими лицами.
            </p>
            <a href="./request/request.html"><div class="buttonCallback">Оставить заявку</div></a>
          </div>
        </div>
      </div>
    </div>

    <div class="aboutMe">
      <div class="container">
        <div class="aboutMe__block">
          <div class="aboutMe__block__text">
            <h1>Обо мне</h1>
            <p>
              Меня зовут Денис Поздеев. У меня два образования по юриспруденции
              в НИУ "Высшая школа экономики" в Санкт-Петербурге и в Москве. Имею
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
          <div class="aboutMe__block__photo">
            <div class="mePhoto">
              <img
                class="mePhotoImg"
                src="./img/denPozdeev.png"
                alt="Денис глава компании(фото)"
              />
            </div>
            <div class="contactBlockPhoto">
              <a href="https://web.telegram.org/z/#696102250">
                <img src="./img/telegram.svg" alt="telegram"
              /></a>
              <a href="https://vk.com/pozdeevdv">
                <img src="./img/vk.svg" alt="vk"
              /></a>
              <a href="./"><img src="./img/youtube.svg" alt="youtube" /></a>
              <a href="./"><img src="./img/telefon.svg" alt="telefon" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="team">
      <div class="container">
        <h2>Команда</h2>
        <div class="team__blocks">
          <div class="team__block">
            <img src="./img/team_1.png" alt="Тут лицо" class="team__photo" />
            <div class="team__information">
              <img src="./img/polygon.png" alt="Треугольник тут был раньше" />
              <div class="team__block__text">
                <h3>Денис Поздеев</h3>
                <p>Директор компании</p>
              </div>
            </div>
          </div>

          <div class="team__block">
            <img src="./img/team_2.png" alt="Тут лицо" class="team__photo" />
            <div class="team__information">
              <img src="./img/polygon.png" alt="Треугольник тут был раньше" />
              <div class="team__block__text">
                <h3>Сергей Поздеев</h3>
                <p>Менеджер компании</p>
              </div>
            </div>
          </div>

          <div class="team__block">
            <img src="./img/team_3.png" alt="Тут лицо" class="team__photo" />
            <div class="team__information">
              <img src="./img/polygon.png" alt="Треугольник тут был раньше" />
              <div class="team__block__text">
                <h3>Константин Харионовский</h3>
                <p>Backend-разработчик</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cooperation">
      <div class="container">
        <h2>Сотрудничество</h2>
        <div class="cooperation__blocks">
          <div class="cooperation__block">
            <img
              src="./img/cooperation_1.png"
              alt="здесь маленький кружочек должен"
            />
            <h3>Заявка</h3>
            <p>
              Вы оставляете заявку у нас на сайте и описываете свою проблему
            </p>
          </div>
          <div class="cooperation__block">
            <img
              src="./img/cooperation_2.png"
              alt="здесь маленький кружочек должен"
            />
            <h3>Обсуждение</h3>
            <p>Мы обсуждаем с вами возникшие вопросы по вашему делу</p>
          </div>
          <div class="cooperation__block">
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
          <div class="cooperation__block">
            <img
              src="./img/cooperation_4.png"
              alt="здесь маленький кружочек должен"
            />
            <h3>Договор</h3>
            <p>Заключаем договор о сотрудничестве</p>
          </div>
          <div class="cooperation__block">
            <img
              src="./img/cooperation_5.png"
              alt="здесь маленький кружочек должен"
            />
            <h3>Наша работа</h3>
            <p>Наши специалисты работают с вашим делом</p>
          </div>
          <div class="cooperation__block">
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

    <div class="services">
      <div class="container">
        <h2>Услуги</h2>
        <div class="services__blocks">
          <div class="services__block">
            <img src="./img/service_1.jpg" alt="картинка в услугах" />
            <div class="services__block__content">
              <h3>Краткое описание услуги</h3>
              <p>Вот тут кратко опишем услугу, которую твоя компания будет предоставлять</p>
              <h4>150 тыс. руб.</h4>
              <a href="./request/request.html"> <div class="buttonCallback buttonCallback__service">Оставить заявку</div></a>
            </div>
          </div>
          <div class="services__block">
            <img src="./img/service_2.jpg" alt="картинка в услугах" />
            <div class="services__block__content">
              <h3>Краткое описание услуги</h3>
              <p>Вот тут кратко опишем услугу, которую твоя компания будет предоставлять</p>
              <h4>150 тыс. руб.</h4>
              <a href="./request/request.html"> <div class="buttonCallback buttonCallback__service">Оставить заявку</div></a>
            </div>
          </div>
          <div class="services__block">
            <img src="./img/service_3.jpg" alt="картинка в услугах" />
            <div class="services__block__content">
              <h3>Краткое описание</h3>
              <p>Вот тут кратко опишем услугу, которую твоя компания будет предоставлять</p>
              <h4>150 тыс. руб.</h4>
              <a href="./request/request.html"> <div class="buttonCallback buttonCallback__service">Оставить заявку</div></a>
            </div>
          </div>
          <div class="services__block">
            <img src="./img/service_4.jpg" alt="картинка в услугах" />
            <div class="services__block__content">
              <h3>Краткое описание</h3>
              <p>Вот тут кратко опишем услугу, которую твоя компания будет предоставлять</p>
              <h4>150 тыс. руб.</h4>
              <a href="./request/request.html"> <div class="buttonCallback buttonCallback__service">Оставить заявку</div></a>
            </div>
          </div>
          <div class="services__block">
            <img src="./img/service_5.jpg" alt="картинка в услугах" />
            <div class="services__block__content">
              <h3>Краткое описание</h3>
              <p>Вот тут кратко опишем услугу, которую твоя компания будет предоставлять</p>
              <h4>150 тыс. руб.</h4>
              <a href="./request/request.html"> <div class="buttonCallback buttonCallback__service">Оставить заявку</div></a>
            </div>
          </div>
          <div class="services__block">
            <img src="./img/service_6.jpg" alt="картинка в услугах" />
            <div class="services__block__content">
              <h3>Краткое описание</h3>
              <p>Вот тут кратко опишем услугу, которую твоя компания будет предоставлять</p>
              <h4>150 тыс. руб.</h4>
              <a href="./request/request.html"> <div class="buttonCallback buttonCallback__service">Оставить заявку</div></a>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}
