import React from 'react'

export const SignIn = () => {
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
                <p>У вас еще нет аккаунта?</p>
                <a href="./signUp.html"> Зарегистрироваться </a>
            </div>
          </div>
          <div class="data__input">
            <div class="data">
              <input class="text-field__input" type="text" id="login" placeholder="Email"/>
              <input class="text-field__input" type="password" id="login" placeholder="password"/>
              <div class="buttonCallback">Войти</div>
            </div>
          </div>
          
        </div>
    </div>
  </div>
  )
}
