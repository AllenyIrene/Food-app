import React, { useContext, useState } from 'react'
import { QuizStateContext } from '../context/QuizContext'
import Quiz from './Quiz'



const Mainmenu = ({}) => {
    const {gameState, setGameState} = useContext(QuizStateContext)
    const {quizState, setQuizState} = useContext(QuizStateContext)
    const {credentials,dispatch} = useContext(QuizStateContext)

    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const handleGame = () =>{
      setGameState("quiz")
      setQuizState("quiz")
    }

  const handleCredentials = (e) =>{
   e.preventDefault ();
   console.log(`then name is ${name} and age is ${age}`)
   const newCredentials = {
    name:name,
    age:age,
    id: Math.floor(Math.random()*10)
   }
   dispatch({type: "set-names", payload: newCredentials})
   setAge("")
   setName("")
  }
    
  return (
    <div className='menu'>
        {gameState === "menu" ?
        <div className='menu-item'>
          <p>WELCOME TO THE GAME</p> 
          <form onSubmit={handleCredentials}>
            <label>
                Name: <input type="text"  value={name} onChange = {(e)=>setName(e.target.value)}/>
            </label>
            <label>
                Age: <input type="text" value={age} onChange = {(e)=>setAge(e.target.value)}/>
            </label>
         <button>Submit Credentials</button>
          </form >
      
         
        <button onClick={handleGame} > START GAME </button> 
  
        </div>
        :
        
          <Quiz/>
        
        } 

    </div>
  )
}

export default Mainmenu