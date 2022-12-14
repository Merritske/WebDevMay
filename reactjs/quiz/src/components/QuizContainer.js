import React, { useState, useEffect } from 'react'
//15 vragen ophalen
//vraag per vraag tonen, na antwoord volgende vraag
// => teller voor de vragen-> currentQuestion
//antwoorden per vraag ophalen -> allAnswers
//multiple choice vragen -> bullets, random volgorde van incorrect en correct answer
// useEffect enkel laten werken als de 15 vragen gedaan zijn

//met nodeJS maken zodat je niet altijd fetch moet doen, gewoon om te proberen

function QuizContainer() {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState('');
  const [allAnswers, setAllAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [randomN, setRandomN] = useState([])
  const [checked, setChecked] = useState(false)
 const [score, setScore] = useState(0)
 const [limit, setLimit] = useState(15)
 // const [answers, setAnswers] = useState([])
  const [end, setEnd] = useState([0])

function randomInd(){
  let uniqueChars;

  let randomI =[]
do{

randomI.push(Math.floor(Math.random()*[4])) 
   console.log(randomI)
    // random.push()   
    uniqueChars = randomI.filter((c, index) => {
      return randomI.indexOf(c) === index;
    })

    randomI = uniqueChars
   }while(randomI.length != 4)
  
 console.log(uniqueChars)
    setRandomN(uniqueChars)
 }

 console.log(randomN )


//fetch questions and answers
  useEffect(() => {
    
    async function fetchQuestions() {
      console.log('load')
      let res = await fetch('https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=15&region=BE&difficulty=easy')
      let data = await res.json()
         setQuestions(data)
    }
    fetchQuestions();
console.log(end)


  }, [end])




 let answers



   function nextQuestion() {
    randomInd() 
    console.log(questions);
    console.log(question)
    console.log('klik')
    setCurrentQuestion(currentQuestion + 1)
   setQuestion(questions[currentQuestion].question);
  setAllAnswers(questions[currentQuestion].incorrectAnswers)
   setCorrectAnswer(questions[currentQuestion].correctAnswer)
setLimit(limit -1)

}
 console.log(question)
  answers = [...allAnswers,correctAnswer]

function valueHandler(e){
if(e.target.value == correctAnswer){
  console.log('correct')
  e.target.checked =  true
setScore(score +1)
}else{
  console.log('wrong')
}
if(limit == 0){
  setEnd([...end, score])
  alert(`the end of the game. Your score is ${score}/15`)
  console.log(end)
  setScore(0)
  setLimit(15)
  console.log(limit)
  setCurrentQuestion(0)
 
}
  nextQuestion()

}

 return (
    <div >
      <h2> QuizContainer</h2>
      <div style={{ 'display': 'flex' }}>
        <p>Question:   </p>
        <div>
          {question}
          <button onClick={nextQuestion}>Start</button>
          {/* {question == "" ? :<button onClick={nextQuestion}>Next</button> } */}
<form onChange={valueHandler} style={{'display':'flex', 'flexDirection':'column', 'textAlign':'start', 'padding':'25px'}}>
{/* // onChange={submitHandler} */}
 {/* {answers.map((a)=>(
<div>
  {a}
</div>
))}    */}

 <label> <input type='radio' value={answers[randomN[0]]} checked= {false} />{answers[randomN[0]]}</label>
<label>  <input type='radio' value={answers[randomN[1]]}  checked={false}/>{answers[randomN[1]]}</label>
<label>  <input type='radio' value={answers[randomN[2]]} checked={false} />{answers[randomN[2]]}</label>
 <label> <input type='radio' value={answers[randomN[3]]}  checked={false}/>{answers[randomN[3]]}</label>

</form>


{/* voorbeeld form radion-buttons
const [selectedOption,setSelectedOption] = useState()
 <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option1"
              checked={true}
              className="form-check-input"
            />
            Option 1
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option2"
              className="form-check-input"
            />
            Option 2
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option3"
              className="form-check-input"
            />
            Option 3
          </label>
        </div> */}


          {/* <h3>{allAnswers}</h3> */}
        </div>

      
      </div>

  <h4> SCORE : {score} </h4>
    </div>
  )
}

export default QuizContainer


// //oplossing ATilla
// import React, { useEffect, useRef, useState } from 'react'
// import { Button, Form,Col } from 'react-bootstrap'

// function QuizContainer() {
//     const [questions, setQuestions] = useState([])
//     const [allAnswers, setAllAnswers] = useState([])
//     const [currentQuestion, setCurrentQuestion] = useState(0) // state for currentQuestion
//     const [userscore, setUserscore] = useState(0)
//     const formRef = useRef();
//     function shuffle(array) {
//         let currentIndex = array.length, randomIndex;

//         // While there remain elements to shuffle.
//         while (currentIndex != 0) {

//             // Pick a remaining element.
//             randomIndex = Math.floor(Math.random() * currentIndex);
//             currentIndex--;

//             // And swap it with the current element.
//             [array[currentIndex], array[randomIndex]] = [
//                 array[randomIndex], array[currentIndex]];
//         }

//         return array;
//     }

//     useEffect(() => {
//         async function FetchAllQuestions() {
//             let res = await fetch('https://opentdb.com/api.php?amount=10&category=18')
//             let data = await res.json();
//             setQuestions(data.results)
//             let correctAnswer = data.results[currentQuestion].correct_answer
//             let incorrectAnswers = data.results[currentQuestion].incorrect_answers
//             // console.log(correctAnswer,incorrectAnswers)
//             setAllAnswers([correctAnswer, ...incorrectAnswers])
//         }
//         FetchAllQuestions()

//     }, [currentQuestion])


//     function NextQuestion(e) {
//         console.log(formRef.current.elements['user_answer'].value)
//         if(formRef.current.elements['user_answer'].value !==""){
//             if (questions[currentQuestion].correct_answer === formRef.current.elements['user_answer'].value) {
//                 setUserscore(userscore + 1)
//             }
//             setCurrentQuestion(currentQuestion + 1)
//         }else{
//             alert('You need to pick an option')
//         }
       
//     }




//     return (
//         <div>
//             <Col md={3}>
//             {
//                 questions[currentQuestion] !== undefined && questions.length > 0 ?
//                     (
//                         <div>
//                             <h1 className="lead">{questions[currentQuestion].question}</h1>
//                             <Form ref={formRef}>
//                                 {
//                                     shuffle(allAnswers).map(option => (
//                                         <Form.Check
//                                             reverse
//                                             label={option}
//                                             name="user_answer"
//                                             type={'radio'}
//                                             value={option}
//                                             id={`reverse-2`}
//                                         />
//                                     ))
//                                 }

//                             </Form>
//                             <Button onClick={NextQuestion}>Next Question</Button>
//                         </div>
//                     ) :
//                     'Loading...'
//             }
//             </Col>
//             <Col md={2}>
//                 <h5>Your score is {userscore}</h5>
//             </Col>
//         </div>
//     )
// }

// export default QuizContainer