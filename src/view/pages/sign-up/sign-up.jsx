import React from 'react'

export const SignUp = () => {
  return (
     <div class="auth">
      <div class="auth__block">
        <div class="img__left">
          <img
            src="../img/auth__right.png"
            alt="картинка слева"
            class="img__left_auth"
          />
        </div>
        <div class="form__data__right">
          <div class="head__data__right">
            <div class="head__data__righh-item"><a href="../index.html"> На главную страницу </a></div>
            <div class="head__data__righh-item">
                <p>У вас уже есть аккаунта?</p>
                <a href="./signIn.html"> Войти </a>
            </div>
          </div>
          <div class="data__input">
            <div class="data">
              <input class="text-field__input" type="text" placeholder="Имя"/>
              <input class="text-field__input" type="text" placeholder="Фамилия"/>
              <input class="text-field__input" type="text" placeholder="Отчество"/>
              <input class="text-field__input" type="text" placeholder="Телефон"/>
              <input class="text-field__input" type="text" placeholder="Email"/>
              <input class="text-field__input" type="password" id="pas1" placeholder="password"/>
              <input class="text-field__input" type="password" id="pas2" placeholder="password"/>
              <div class="buttonCallback">Зарегистрироваться</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
