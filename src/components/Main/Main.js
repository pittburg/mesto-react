import avatar from "../../images/kusto.png";
import React from "react";
import api from "../../utils/api.js";
import Card from "../Card/Card";

function Main(props) {
  const [userName, setUserName] = React.useState('Имя');
  const [userDescription, setUserDescription] = React.useState('О себе');
  const [userAvatar, setUserAvatar] = React.useState({avatar});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, initialCards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(`Что-то не так: ${err}`)
      })
  }, []);

  return (
    <main className="main">
      <section className="profile width-container">
        <div className="profile__avatar" style={{backgroundImage: `url(${userAvatar})`}}></div>
        <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
        <div className="profile__info">
          <h1 className="profile__title overflow">{userName}</h1>
          <button type="button" className="profile__button profile__button_edit hover-button" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle overflow">{userDescription}</p>
        </div>
        <button type="button" className="profile__button profile__button_add hover-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="cards-grid width-container">
        {cards.map(card => {
          return(
            <Card key={card._id} card={card} onDeleteCard={props.onDeleteCard} onCardClick={props.onCardClick} />
          )
        })}
      </section>

    </main>
  )
}

export default Main;