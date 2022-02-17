import avatar from "../../images/kusto.png"

function Main() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_edit').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_add').classList.add('popup_opened');
  }

  return (
    <main className="main">
      <section className="profile width-container">
        <img className="profile__avatar" src={avatar} alt="аватар" />
        <button className="profile__avatar-button" onClick={handleEditAvatarClick}></button>
        <div className="profile__info">
          <h1 className="profile__title overflow">Жак-Ив Кусто</h1>
          <button type="button" className="profile__button profile__button_edit hover-button" onClick={handleEditProfileClick}></button>
          <p className="profile__subtitle overflow">Исследователь океана</p>
        </div>
        <button type="button" className="profile__button profile__button_add hover-button" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="cards-grid width-container">
      </section>

    </main>
  )
}

export default Main;