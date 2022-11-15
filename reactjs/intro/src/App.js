import logo from './logo.svg';
import './App.css';
import ChildComponent from './components/ChildComponent';
import { useState} from 'react'


function App() {
  const [number, setNumber] = useState(1)
  
  function clickHandle(){
    console.log("click")
   setNumber(number +1)
  }
  return (
    <div className="App">
      <button onClick={clickHandle}>Do not click</button>
       {number}
        <ChildComponent name="koffie"/>
      
    </div>
  );
}

export default App;
