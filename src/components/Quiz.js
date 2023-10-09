import React, { useContext, useState } from 'react'
import { QuizStateContext } from '../context/QuizContext'
import EndScreen from './EndScreen'
import questions from '../Questions'

const Quiz = () => {
    const {gameState, setGameState} = useContext(QuizStateContext)
    const {quizState, setQuizState} = useContext(QuizStateContext)
    const {credentials,dispatch} = useContext(QuizStateContext)
    const [currentindex,setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [msg, setmsg] = useState("----")
    const [color,setColor] = useState(false)

  
    // HANDLES THE NEXT QUESTION
    const handleNextQuestion = () =>{
      const index = currentindex +1
      if(index < questions.length) 
      {
        setCurrentIndex(index)
        setmsg("----")
        setColor(false)
      }
    
      else
      setQuizState("")
    }
    // HANDLES THE PREVIOUS QUESTION
    const handlePrev = () =>{
      const index = currentindex 
      if(index === 0 )
      {
        setCurrentIndex(index)
      }
      else if (index >0)
      {
        setCurrentIndex(index - 1)
      }

        
      
    }

  // HANDLES THE SCORES AND THE CORRECT ANSWER
    const handleScore = (isCorrect) => {
     
      if (isCorrect)
      {
        let newScore = score + 1
        setScore(newScore)
        setmsg(msg ? "CORRECT" : "COREECT")
        setColor(true)

      }
     else {
      setmsg(msg ? "INCORRECT" : "INCORRECT")
      setColor(color)
     }
    }



  return (

    <div className='quiz'>
      
        {quizState === "quiz" ? 

        <div className='quiz-item'>
          <div className='cred'>
          <span> PLAYER: </span> {credentials.map ((crd) => 
      <div>{crd.name} {crd.age} 
      </div>
     )}
          </div>
        Quiz
        <span>MESSAGE :{msg}</span>
        <h2>Question: {currentindex +1}/{questions.length}</h2>
        <div className='questions-info'>
         <div className='questions'>{questions[currentindex].questionText}</div>
          <div className='answer'>
            {questions[currentindex].answerOptions.map((ansopt)=> <button style={{background: color ? "" : "pink"}} onClick={()=>handleScore(ansopt.isCorrect)}>{ansopt.answerText}</button>)}
            </div>
        </div>
        <div className='btn' >
        <button onClick={() =>setGameState("menu")}>RESTART</button>
        <button onClick={handlePrev}>PREV QUESTION</button>
        <button onClick={handleNextQuestion} >Next Question</button> 
        <button onClick={() =>setQuizState("end")}>END GAME</button>
        </div>
        </div>
        :
        <EndScreen score= {score}/>
    }
        </div>
  )
}

export default Quiz