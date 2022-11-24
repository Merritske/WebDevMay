import { Container, Col, Row, Button, Badge } from "react-bootstrap"
import { useState } from 'react'

function App() {
  const [user, setUser] = useState([])
  const [currentUser, setCurrentUser] = useState()
  const fetchingData = async () => {
    console.log("user")
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    console.log(data)
    setUser(data)
  }
  const getDetail = (user) => {
    setCurrentUser(user)
  }
  return (
    <Container className='bg-dark h-100'>
      <Row className="justify-content-center text-center text-light">
        <Col md={5} >
          <h1>Fetch user data</h1>
          <Button onClick={fetchingData} >Get user Data</Button>
          {
            user.map((user, index) => (
              <div key={index} onClick={() => getDetail(user)}>
                <p>{user.name}</p>
              </div>
            ))
          }
        </Col>
        <Col md={6} className="text-start p-5">
          <h1>User detail</h1>
          {console.log(currentUser.name)}
          <p><Badge className='p-3'>Phone: </Badge> {currentUser.phone}
          </p>
          <p><Badge className='p-3'>Email: </Badge> {currentUser.email}
          </p>
          <p><Badge className='p-3'>username: </Badge> {currentUser.username}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
