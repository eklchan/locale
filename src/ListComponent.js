import React, { useState, useEffect } from 'react';
import Button from './Button.js';



const ListComponent = (props) => {
  const [lastClickedButton, setLastClickedButton] = useState("");
  const buttonArray = ["Create", "Destroy", "Update", "Read"]

  useEffect(() => {
    if(lastClickedButton){
      props.myFunction(lastClickedButton)
    }
  }, [lastClickedButton, props])

  const renderButtons = buttonArray.map((button, i) => {
    return (
      <Button buttonName={button} setLastClickedButton={setLastClickedButton} key={i}>
      </Button>
    )
  })

  return (
    <div>
      {lastClickedButton ? <h1>The last clicked button is {lastClickedButton}</h1>: <h1>Please Select a Button</h1>}
      <div className="buttonwrap">
       {renderButtons}
      </div>
    </div>
  )
}

export default ListComponent;
