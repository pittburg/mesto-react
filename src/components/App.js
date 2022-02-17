import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function App() {

  return (
    <div className="page">
      <Header/>
      <Main/>
      <Footer/>

      <div className="popup popup_edit">
        <div className="popup__content">
          <button type="button" className="popup__close popup__close_edit hover-button"></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form popup__form_edit" id="popup-edit" name="profile" noValidate>
            <input
              type="text"
              className="popup__input popup__input_type_name"
              id="name"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              autoComplete="off"
              required />
            <span id="name-error" className="popup__error"></span>
            <input
              type="text"
              className="popup__input popup__input_type_about"
              id="about"
              name="about"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              autoComplete="off"
              required />
            <span id="about-error" className="popup__error"></span>
            <button type="submit" className="popup__button" form="popup-edit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_add">
        <div className="popup__content">
          <button type="button" className="popup__close popup__close_add hover-button"></button>
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form popup__form_add" id="popup-add" name="card" noValidate>
            <input
              type="text"
              className="popup__input popup__input_type_place"
              id="place"
              name="place"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              autoComplete="off"
              required />
            <span id="place-error" className="popup__error"></span>
            <input
              type="url"
              className="popup__input popup__input_type_link"
              id="link"
              name="link"
              placeholder="Ссылка на картинку"
              autoComplete="off"
              required />
            <span id="link-error" className="popup__error"></span>
            <button type="submit" className="popup__button" form="popup-add">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_modal">
        <figure className="popup__figure">
          <button type="button" className="popup__close popup__close_modal hover-button"></button>
          <img className="popup__photo" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>

      <div className="popup popup_confirm">
        <div className="popup__content">
          <button type="button" className="popup__close popup__close_confirm hover-button"></button>
          <h3 className="popup__title popup__title_confirm">Вы уверены?</h3>
          <form className="popup__form popup__form_confirm" id="popup-confirm" name="confirm" noValidate>
            <button type="submit" className="popup__button popup__button_confirm" form="popup-confirm">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup_avatar">
        <div className="popup__content">
          <button type="button" className="popup__close popup__close_avatar hover-button"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form popup__form_avatar" id="popup-avatar" name="avatar" noValidate>
            <input
              type="url"
              className="popup__input popup__input_type_link"
              id="avatar"
              name="avatar"
              placeholder="Ссылка на картинку"
              autoComplete="off"
              required />
            <span id="avatar-error" className="popup__error"></span>
            <button type="submit" className="popup__button" form="popup-avatar">Сохранить</button>
          </form>
        </div>
      </div>

      <template className="template">
        <article className="card">
          <button type="button" className="card__trash hover-button"></button>
          <div className="card__wrapper">
            <img className="card__photo" />
          </div>
          <div className="card__description">
            <h2 className="card__title overflow"></h2>
            <div className="card__like-block">
              <button type="button" className="card__like"></button>
              <span className="card__like-counter">0</span>
            </div>
          </div>
        </article>
      </template>

    </div>
  )
}

export default App;