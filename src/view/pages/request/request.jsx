import React from 'react'

export const Request = () => {
  return (
    <div class="request">
      <div class="request__block">
        <div class="img__leff__blockReq">
          <img
            src="../img/auth__right.png"
            alt="картинка слева"
            class="img__left__req"
          />
        </div>

        <div class="form__req">
          <div class="head__data__righh-item">
            <a href="../index.html"> На главную страницу </a>
          </div>

          <form class="form__req" action="НАПИШИ СЮДА САМ ЧЕ ТО">
            <textarea
              class="description"
              id="description"
              name="description"
            ></textarea>
            <input
              class=""
              type="text"
              id="login"
              placeholder="Оставьте заявку"
            />
            <div class="buttonCallback">Отправить заявку</div>
          </form>
        </div>
      </div>
    </div>
  )
}
