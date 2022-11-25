import React from 'react'
import {Navbar, Form, Container, Button, Nav, NavDropdown} from 'react-bootstrap'

function Header() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="m-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>  <Container>
            
                <Navbar.Brand href="#home">Movie CMS</Navbar.Brand>
          
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        <img src='https://img.pixers.pics/pho_wat(s3:700/FO/54/35/43/13/700_FO54354313_c454fded0f5040b56752ace926120c7d.jpg,700,636,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,586,jpg)/pluche-dekens-cartoon-dierentuin-pretpark-illustratie.jpg.jpg'/>
    </div>
  )
}

export default Header