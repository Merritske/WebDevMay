import React, { useContext, useEffect } from 'react'
import Database from '../context/context'
// https://opentdb.com/api.php?amount=10&category=18
function Counter() {
    const myContext = useContext(Database)
    
  return (
    <div>
        <h2>{myContext.count}</h2>
        <button onClick={()=>myContext.setCount(myContext.count+1)}>+</button>
        <button onClick={()=>myContext.setCount(myContext.count-1)}>-</button>
    </div>
  )
}

export default Counter