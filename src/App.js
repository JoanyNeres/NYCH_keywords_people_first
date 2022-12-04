import './App.css';
import React, { useState } from 'react';

function App() {

  const statements = [
    {
        sentence: "1. Personas are representations of your clients that will help you ________ with them.",
        word: "EMPATHIZE",
        statement: "1. Personas are representations of your clients that will help you empathize with them."
    },
    {
        sentence: "2. A persona represents a particular group and not a single ________.",
        word: "PERSON",
        statement: "2. A persona represents a particular group and not a single person."
    },
    {
        sentence: "3. The key pieces of information that go to your personas depends on the ________ of the experience you want to create.",
        word: "CONTEXT",
        statement: "3. The key pieces of information that go to your personas depends on the context of the experience you want to create."
    },
    {
        sentence: "4. Fictional name, photo, age, occupation, goals and skills are common ________ included in personas.",
        word: "COMPONENT",
        statement: "4. Fictional name, photo, age, occupation, goals and skills are common components included in personas."
    },
    {
        sentence: "5. Personas can help you make ________ through the eyes of your target participants.",
        word: "DECISIONS",
        statement: "5. Personas can help you make decisions through the eyes of your target participants."
    },
    {
        sentence: "6. It's important to get feedback from you colleagues and ______ your personas.",
        word: "MODIFY",
        statement: "6. It's important to get feedback from you colleagues and modify your personas."
    }
  ]

  const [i, setIndex] = useState(0)

  const[statementsBlock, setStatementsBlock] = useState([])

  const [url, setUrl] = useState("")

  

  const clickAnswer = (event) => {
    event.preventDefault()
    
    if ((document.querySelector('button:checked').id) === i.toString()){
      document.getElementById(i).hidden=true
      setStatementsBlock(statementsBlock.push(
        <li>
        <p className="statements">{statements[i].statement}</p>
        </li>
      ))
      setIndex(i+1)
      if ((document.getElementById(0).hidden=true) && (document.getElementById(1).hidden=true)
        && (document.getElementById(2).hidden=true) && (document.getElementById(3).hidden=true)
        && (document.getElementById(4).hidden=true) && (document.getElementById(5).hidden=true)){
          setUrl("https://cdn.discordapp.com/attachments/1016745958727491615/1049060879959863437/Profiling-pana.png")
        }
    }
}




  return (
    <div className="App">
      
      <h3 className="statement">{statements[i].sentence}</h3>

      
      <p className="instruction">Click in the correct word below to fill the gap:</p>
      {{url} === "" ?
      <div className="buttons_box">  
          <div className="buttons">
            <button id="3" onClick={clickAnswer}>{statements[3].word}</button>
            <button id="2" onClick={clickAnswer}>{statements[2].word}</button>
            <button id="0" onClick={clickAnswer}>{statements[0].word}</button>
          </div>
          <div className="buttons">
            <button id="4" onClick={clickAnswer}>{statements[4].word}</button>
            <button id="5" onClick={clickAnswer}>{statements[5].word}</button>
            <button id="1" onClick={clickAnswer}>{statements[1].word}</button>
          </div>
      </div>
      :
      <img className="image-end" alt="illustration" src={url} />}
      <ul>
        {statementsBlock}
      </ul>
    </div>
  );
}

export default App;
