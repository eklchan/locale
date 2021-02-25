import React from 'react';
import "./button.css";

const Button = (props) => {

  const handleButtonClick = () => {
    props.setLastClickedButton(props.buttonName)
  }
  return (
    <button
      onClick={handleButtonClick}    
      className="my-button">
      {props.buttonName}
    </button>
  )
}

export default Button;
