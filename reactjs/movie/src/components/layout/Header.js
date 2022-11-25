// import React from 'react'
// import {Navbar, Form, Container, Button, Nav, NavDropdown} from 'react-bootstrap'

// function Header() {
//   return (
//     <div>
//          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="m-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>  <Container>
            
//                 <Navbar.Brand href="#home">Movie CMS</Navbar.Brand>
          
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href={'/'}>HOME</Nav.Link>
//             <Nav.Link href={'/contact'}>CONTACT</Nav.Link>
//             <NavDropdown title="Categories" id="collasible-nav-dropdown">
//               <NavDropdown.Item href={'/search'}>Search</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//         <img src='https://img.pixers.pics/pho_wat(s3:700/FO/54/35/43/13/700_FO54354313_c454fded0f5040b56752ace926120c7d.jpg,700,636,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,586,jpg)/pluche-dekens-cartoon-dierentuin-pretpark-illustratie.jpg.jpg'/>
//     </div>
//   )
// }
import React from 'react'
import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
function Header({ searchResultHandler,inputHandler }) {
//     const x = useNavigate();
//     const RedirectToHome =(e)=>{
//         if(e.key==='Enter'){
//             return x('/')
//         }
//    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Blueberry</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link text-decoration-none">Homepage</Link>
                        <Link to={'/contact'} className="nav-link text-decoration-none">Contact</Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            <Link to={'/search'} onClick={searchResultHandler} className="dropdown-item text-decoration-none">Adventure</Link>

                            {/* <NavDropdown.Divider /> */}
                            <Link to={'/movies/comedy'} className="dropdown-item text-decoration-none">Comedy</Link>
                        </NavDropdown>
                    </Nav>
                    <Nav className="d-flex flex-row mx-2">
                        <Link to={'/#social'}><FaTwitter fill='white' className="display-6 bg-primary p-1 rounded-1 mx-1" /></Link>
                        <Link to={'/#social'}><FaLinkedin fill='white' className="display-6 bg-primary p-1 rounded-1 me-1" /></Link>
                        <Link to={'/#social'}><FaInstagram fill='white' className="display-6 bg-instagram p-1 rounded-1" /></Link>
                    </Nav>
                    <div className="d-flex">
                    <Form.Control
                        onChange={inputHandler}
                            type="search"
                           // onKeyDown={RedirectToHome}
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header