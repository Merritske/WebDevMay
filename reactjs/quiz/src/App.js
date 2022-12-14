import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import QuizContainer from "./components/QuizContainer";
import Database from "./context/context";
import './style.css'


function App() {
  // fetch url voor de vragen:https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=15&region=BE&difficulty=easy
  const [count, setCount] = useState(0)

  return (
    <Database.Provider value={{ count, setCount }}>
      <div style={{"textAlign":"center", "width":"80%", "margin": "0 auto"}}>
        <h1>Quiz App</h1>
        <QuizContainer/>
        {/* <Counter /> */}
        {/* <button onClick={fetch}>fetch</button> */}
      </div>
    </Database.Provider>

  );
}

export default App;
