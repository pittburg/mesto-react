import React from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ImagePopup from "../ImagePopup/ImagePopup";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import api from "../../utils/api";



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({})
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, initialCards]) => {
        setCurrentUser(user);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(`Что-то не так: ${err}`)
      })
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleDeleteCardClick = () => {
    setIsConfirmPopupOpen(!isConfirmPopupOpen);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api
    .changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
    })
    .catch((err) => {
      console.log(`Что-то не так: ${err}`)
    })
  }


  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Что-то не так: ${err}`)
      })
  }


  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard({})
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header/>
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onDeleteCard={handleDeleteCardClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer/>

      <PopupWithForm name={"avatar"} title={"Обновить аватар"} isOpen={isEditAvatarPopupOpen} buttonText={"Сохранить"} onClose={closeAllPopups}>
        <input
          type="url"
          className="popup__input popup__input_type_link"
          id="avatar"
          name="avatar"
          placeholder="Ссылка на картинку"
          autoComplete="off"
          required />
        <span id="avatar-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm name={"edit"} title={"Редактировать профиль"} isOpen={isEditProfilePopupOpen} buttonText={"Сохранить"} onClose={closeAllPopups}>
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
      </PopupWithForm>

      <PopupWithForm name={"add"} title={"Новое место"} isOpen={isAddPlacePopupOpen} buttonText={"Создать"} onClose={closeAllPopups}>
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
      </PopupWithForm>

      <PopupWithForm name={"confirm"} title={"Вы уверены?"} isOpen={isConfirmPopupOpen} buttonText={"Да"} onClose={closeAllPopups}>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>

    </div>
  </CurrentUserContext.Provider>
  )
}

export default App;