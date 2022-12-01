import React, { useState, useEffect } from 'react'

function QuizContainer() {
  const [questions, setQuestions]= useState([])
 // const [allAnswers, setAllAnswers] = useState([])
//const [currentQuestion, setCurrentQuestion] = useState(0)

useEffect(()=>{
    async   function fetchQuestions(){
      console.log('load')
          let res = await fetch('https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=15&region=BE&difficulty=easy')
       let data = await res.json()
           console.log(data)
  setQuestions(data.map((q)=>q))
          }

          fetchQuestions()
        
        },[]) 
           console.log(questions[0].question)
       // setAllAnswers(questions[currentQuestion].correctAnswer)
    return (
    <div>
       <h2> QuizContainer</h2>
       <div style={{'display': 'flex'}}>
<p>Question:   
{/*  */}
     </p>
    {/* <h3>{allAnswers}</h3> */}
<h4> SCORE : </h4>
       </div>


    </div>
  )
}

export default QuizContainer