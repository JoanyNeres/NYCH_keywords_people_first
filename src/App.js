import './App.css';
import React, { useState } from 'react';
import { Statements } from './Components/Statements'
import statements from './Assets/statementsList'


function App() {

  const [i, setIndex] = useState(0)

  const [buttonsDisplay, setButtonsDisplay] = useState(true)

  const clickAnswer = (event) => {
    event.preventDefault()
    if (Number.parseInt(event.target.id) === i){
      const buttonSelected = document.getElementById(i.toString())
      buttonSelected.style.visibility = "hidden"
      if (i === 5){
        setButtonsDisplay(false)
      }
      else {
        setIndex(i+1)
      }
    }
  }

  return (
    <div className="box_content">
      {buttonsDisplay ?
      <>
        <h3 className="statement_question">{statements[i].sentence}</h3>
        <p className="instruction">Click in the correct word below to fill the gap:</p>
        <div className="buttons_box">  
            <div className="buttons_row">
              <button id="3" onClick={clickAnswer}>{statements[3].word}</button>
              <button id="2" onClick={clickAnswer}>{statements[2].word}</button>
              <button id="0" onClick={clickAnswer}>{statements[0].word}</button>
            </div>
            <div className="buttons_row">
              <button id="4" onClick={clickAnswer}>{statements[4].word}</button>
              <button id="5" onClick={clickAnswer}>{statements[5].word}</button>
              <button id="1" onClick={clickAnswer}>{statements[1].word}</button>
            </div>
        </div>
      </>
      :
      <Statements 
        statements={statements}
      />
      }
    </div>
  );
}

export default App;
