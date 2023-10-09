import React, { useContext, useState} from "react";
import Mainmenu from "./components/Mainmenu";
import QuizContext from "./context/QuizContext";
import './index.css'


function App() {


  return (
    <div className="App">
      <h1>Quizz - App - 2</h1>

      <QuizContext>
        <Mainmenu/>
      </QuizContext>
    </div>
  );
}

export default App;
