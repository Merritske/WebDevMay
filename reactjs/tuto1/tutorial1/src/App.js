import { Button, Col, Container, Row, InputGroup, Form } from 'react-bootstrap'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState('')
  const [show, setShow] = useState(false)
  const increaseNum = (e) => {
    console.log('+')
    if (count >= 10) {
      alert('max value')
    } else {
      setCount(count + 1)
    }
  }
  const decreaseNum = (e) => {
    console.log('-')
    if (count !== 0) {
      setCount(count - 1)
    } else {
      alert('not allowed')
    }

  }
  const handleChange = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value)
  }
  return (
    <Container fluid={false}>
      <Row className='justify-content-center align-items-center
text-center'>
        <Col md={4} className='bg-dark p-5 text-light'>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              onChange={handleChange}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button size='lg' className="rounded-0 mb-2" onClick={() => setShow(!show)}>Display username</Button>
          <Button size='lg' variant='primary' onClick={increaseNum}>increase</Button>
          <h2> {show ? username : ""}</h2>
        </Col>
        <Col md={4} className='bg-primary p-5 text-light'>
          <Button size='lg' variant='dark' onClick={decreaseNum} >decrease</Button>
        </Col>
      </Row>
      <Row className='justify-content-center text-center'>
        <Col md={8} className='p-5 bg-warning text-light'>
          <h1>{count}</h1>
        </Col>
      </Row>



    </Container>
  );
}

export default App;
