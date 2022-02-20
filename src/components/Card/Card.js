import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return(
    <article className="card">
      <button type="button" className="card__trash hover-button" onClick={props.onDeleteCard}></button>
      <div className="card__wrapper">
        <img className="card__photo" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      </div>
      <div className="card__description">
        <h2 className="card__title overflow">{props.card.name}</h2>
        <div className="card__like-block">
          <button type="button" className="card__like"></button>
          <span className="card__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;