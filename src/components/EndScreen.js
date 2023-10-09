import React, { useContext } from 'react'
import { QuizStateContext } from '../context/QuizContext'
import questions from '../Questions'
import Mainmenu from './Mainmenu'

const EndScreen = ({score}) =>{
    const {gameState, setGameState,quizState, setQuizState} = useContext(QuizStateContext)

  return (
    <div >
        {
          gameState !== "menu" ?
          <div className='EndScreen'>
        <h1>THE QUIZ IS OVER !!!!!!!</h1>
        YOUR SCORE IS {score}/ {questions.length}
        <div className='btn'>
        <button onClick={() => setQuizState("quiz")}>PREV QUESTION</button>
        <button onClick={()=> setGameState("menu")}>RESTART</button>
        </div>
          </div>
          :
          <Mainmenu/>
          
        }
        
    
        </div>
  )
}

export default EndScreen