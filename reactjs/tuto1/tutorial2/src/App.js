import {Container, Col, Row, Button} from "react-bootstrap"
import {useState} from 'react'

function App() {
   const [user, setUser] = useState([])
 const fetchingData = async ()=>{
     console.log("user")
     let response = await fetch('https://jsonplaceholder.typicode.com/users')
     let data = await response.json()
     console.log(data)
     setUser(data)
   }
  return (
  <Container className='bg-dark h-100'>

<Row className="justify-content-center text-center text-light">
  <Col md={10} >
  <h1>Fetch user data</h1>
  <Button onClick={fetchingData} >Get user Data</Button>
  </Col>
{
  user.map((user, index)=>(
    <div key={index}>
      <p>{user.name}</p>
    </div>
  )
    
  )
}
</Row>



  </Container>
  );
}

export default App;
