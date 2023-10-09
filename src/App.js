import React, { useState } from "react";
import './index.css'

function App() {
  const questions = [
    {questionText : "What is the Capital of France?",
     answerOptions : [
      {answerText : "New York", isCorrect: false },
      {answerText : "London", isCorrect: false },
      {answerText : "Paris", isCorrect: true },
      {answerText : "Dublin", isCorrect: false },
    ],
    id:1
   },

   {questionText : "Who is C.E.O of Tesla?",
   answerOptions : [
    {answerText : "Jeff Benzos", isCorrect: false },
    {answerText : "Elon Musk", isCorrect: true },
    {answerText : "Bill Gates", isCorrect: false},
    {answerText : "Tony Stark", isCorrect: false },
  ],
  id:2
 },
 {questionText : "The Iphone was created by which company",
 answerOptions : [
  {answerText : "Apple", isCorrect: true},
  {answerText : "Itel", isCorrect: false },
  {answerText : "Amazon", isCorrect: false },
  {answerText : "Microsoft", isCorrect: false },
],
id:3
},
{questionText : "How many Harry Potter books are there",
answerOptions : [
 {answerText : "1", isCorrect: false },
 {answerText : "2", isCorrect: false },
 {answerText : "6", isCorrect: true },
 {answerText : "7", isCorrect: false },
],
id:4
},

  ]
 
  const [activeIndex, setActiveIndex] = useState(0)
  const [showScore, setShowScore] = useState(true)
  const [score, setScore] = useState (0)
  const [msg, setMsg] = useState("----")
  const [color, setColor] = useState("palevioletred")

  

// A FUNCTION TO MOVE TO THE NEXT QUESTION WHEN THE BUTTON IS CLICKED
  const handleNext = (isCorrect) => {

    if(isCorrect === true) 
    {
    let newScore = score +1
      setScore(newScore)
      setMsg(msg ? "CORRECT" : "CORRECT")
      setColor(color ? "plum" : "")
    }
   else 
   {
    setMsg(msg ? "TRY AGAIN" : "TRY AGAIN")
    setColor(color ? "yellow" : "")
   }
   
  }
  
  const nextQuextion = () => {
    let index = activeIndex +1 
    if(index < questions.length) {
      setActiveIndex(index)
      setMsg("")
      
    }
    else {
      setShowScore(false)
    }

  }
 
  return (
    <div className="App">
      <h1>QUIZ - APP</h1> 
      {showScore ?  <div>
      <div className="question-display">
       
       <span className="id"> Question {questions[activeIndex].id}/{questions.length}</span>
       <span className="q">  {questions[activeIndex].questionText}</span>
       </div> 
       <p>ANSWER : {msg}</p>
       <div className="mapped">{questions[activeIndex].answerOptions.map((opt)=> 
     {
      return(
          <li className="btn-1" >
           <button  className= "answers" style={{background: color}}  onClick={()=>handleNext(opt.isCorrect) } >{opt.answerText}</button>
          </li>
          
       )
     }
    
     )} </div>
     <button onClick={nextQuextion }>NextQuextion</button>
     </div>
     
       :
       <>
      YOUR SCORE IS : {score} out of {questions.length}
       </>
       }
      
    
    </div>
  );
}

export default App;
