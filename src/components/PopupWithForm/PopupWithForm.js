
function PopupWithForm(props) {
  return(
    <div className={`popup popup_${props.name}`}>
      <div className="popup__content">
        <button type="button" className={`popup__close popup__close_${props.name} hover-button`}></button>
        <h3 className={`popup__title popup__title_${props.name}`}>{props.title}</h3>
        <form className={`popup__form popup__form_${props.name}`} id={`popup-${props.name}`} name={`${props.name}`} noValidate>
          <button type="submit" className={`popup__button popup__button_${props.name}`} form={`popup-${props.name}`}>Да</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;