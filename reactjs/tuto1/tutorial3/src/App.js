import { Button, Container, Row, InputGroup, Form, Col } from "react-bootstrap";
import {useState} from 'react'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

const handleInput = (e)=>{
console.log('handle input', e.target.value, e.target)
setTodo(e.target.value)
}
const handleClick = ()=>{
  console.log('klik', todo)
  setTodos([...todos, todo])
 setTodo('')
}

  return (
   <Container>
    <Row className="justify-content-center bg-secondary p-5 text-light">
      <Col>
      <InputGroup className="mb-3 mt-3">
        <InputGroup.Text id="basic-addon1">TODO</InputGroup.Text>
        <Form.Control
        onChange={handleInput}
        value = {todo}
          placeholder="todo"
          aria-label="todo"
          aria-describedby="basic-addon1"
        />
        <Button onClick={handleClick} >Add</Button>
      </InputGroup>
      </Col>

      <ul>{
        todos.map((taak, index)=>(
      
            <li key={index}>{taak}</li>
        
        ))
      }</ul>
    </Row>
   </Container>
  );
}

export default App;
