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
 // const [answers, setAnswers] = useState([])
  const [end, setEnd] = useState(false)
  useEffect(() => {
    async function fetchQuestions() {
      console.log('load')
      let res = await fetch('https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=15&region=BE&difficulty=easy')
      let data = await res.json()
         setQuestions(data)
    }

    fetchQuestions();
   
  }, [end])
const [random, setRandom] = useState([])
console.log(questions);
console.log(random)
 let answers

//function submitHandler(){
 
   function nextQuestion() { 
    console.log('klik')
//     //random volgorde antwoorden
    let uniqueChars;
do{
  setRandom(Math.floor(Math.random()*[4]))
  // random.push()
  uniqueChars = random.filter((c, index) => {
    return random.indexOf(c) === index;
  })
  // random = uniqueChars
  setRandom(uniqueChars)
}while(random.length !== 4)
console.log(random.length)



    setCurrentQuestion(currentQuestion + 1)
    console.log(questions[currentQuestion].question)
    setQuestion(questions[currentQuestion].question);
    setAllAnswers(questions[currentQuestion].incorrectAnswers)
   setCorrectAnswer(questions[currentQuestion].correctAnswer)
 

console.log(random)

console.log(correctAnswer)
 console.log(allAnswers)

}
answers = [...allAnswers,correctAnswer]
let randomA = []
 //setAnswers([...allAnswers,correctAnswer])
 console.log(answers)
 console.log(random)
for(let x=0; x< random.length; x++){
  randomA.push(answers[random[x]])
}
console.log(randomA)
 console.log(answers.length)
 return (
    <div >
      <h2> QuizContainer</h2>
      <div style={{ 'display': 'flex' }}>
        <p>Question:   </p>
        <div>
          {question}
          <button onClick={nextQuestion}>Start</button>
          {/* {question == "" ? :<button onClick={nextQuestion}>Next</button> } */}
<form >
{/* // onChange={submitHandler} */}
 {/* {answers.map((a)=>(
<div>
  {a}
</div>
))}    */}

 <label> <input type='radio' value={allAnswers[random[0]]} />{answers[3]}</label>
<label>  <input type='radio' value={allAnswers[random[1]]} />{allAnswers[1]}</label>
<label>  <input type='radio' value={allAnswers[random[2]]} />{allAnswers[2]}</label>
 <label> <input type='radio' value={allAnswers[random[3]]} />{allAnswers[0]}</label>

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

        <h4> SCORE : </h4>
      </div>


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