import React, { useState, useEffect } from 'react'
//15 vragen ophalen
//vraag per vraag tonen, na antwoord volgende vraag
// => teller voor de vragen-> currentQuestion
//antwoorden per vraag ophalen -> allAnswers
//multiple choice vragen -> bullets, random volgorde van incorrect en correct answer
// useEffect enkel laten werken als de 15 vragen gedaan zijn

function QuizContainer() {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState('');
 const [allAnswers, setAllAnswers] = useState([]);
const [correctAnswer, setCorrectAnswer] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const end = false
  useEffect(() => {
    async function fetchQuestions() {
      console.log('load')
      let res = await fetch('https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=15&region=BE&difficulty=easy')
      let data = await res.json()
      console.log(data)

      setQuestions(data)
    }

    fetchQuestions()
  }, [end])

  function nextQuestion() {
    setCurrentQuestion(currentQuestion + 1)
    console.log(questions[currentQuestion].question)
    setQuestion(questions[currentQuestion].question);
    setAllAnswers(questions[currentQuestion].incorrectAnswers)
   setCorrectAnswer(questions[currentQuestion].correctAnswer)
  } 
let uniqueChars
let random =[]
console.log(correctAnswer)
 console.log(allAnswers)
 let answers = [...allAnswers,correctAnswer]
 console.log(answers.length)
console.log(random.length)
//random volgorde antwoorden
do{
   random.push(Math.floor(Math.random()*[answers.length]))
uniqueChars = random.filter((c, index) => {
  return random.indexOf(c) === index;
});
random = uniqueChars
}while(random.length !== answers.length)

console.log(random)


 return (
    <div >
      <h2> QuizContainer</h2>
      <div style={{ 'display': 'flex' }}>
        <p>Question:   </p>
        <div>
          {question}
          {question == "" ?<button onClick={nextQuestion}>Start</button> :<button onClick={nextQuestion}>Next</button> }
<form>
  <input type='radio' value={allAnswers}/><label>J.K.ROWLING</label>

</form>

          {/* <h3>{allAnswers}</h3> */}
        </div>

        <h4> SCORE : </h4>
      </div>


    </div>
  )
}

export default QuizContainer