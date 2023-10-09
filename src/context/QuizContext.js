import React, { createContext, useReducer, useState } from 'react'


const initialState = {
  credentials : [
    { name: "", age: "" , id:""}
  ]
}
const reducer = (state, action) =>{
  switch (action.type) {
    case "set-names" : return {
      credentials:[state.credentials,action.payload]
    }

    default : return state
  }
}
export const QuizStateContext = createContext()
const QuizContext = ({children}) =>{

  const [state, dispatch] = useReducer(reducer,initialState)
  const [gameState, setGameState] = useState("menu") 
  const [quizState, setQuizState] = useState("quiz")

  

 const providerValues = {gameState, setGameState,quizState, setQuizState,
  credentials:state.credentials,dispatch}
  return (
   <QuizStateContext.Provider value={providerValues}>
    {children}
   </QuizStateContext.Provider>
  )
}

export default QuizContext