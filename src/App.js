import React  from 'react';
import "./app.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,NavDropdown,Nav,Row, Col,Container,Button, Card} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
     
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  
  <Container>
  <Navbar.Brand href="#home">PLEASE SELECT YOUR HERO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      <NavDropdown title="ROLES" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">TANK</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">SUPPORT</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">ASSASIN</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">FIGHTER</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">MAGE</NavDropdown.Item>
      </NavDropdown>
      <input></input>
      <Button variant="secondary">Search</Button>
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">GRANDMASTER</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        IV
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<Container className="content">
  <Row  >
      <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftABmAgDo5aZEWsq6-NSdVqSjI_R7fTRhkZr-wXKl_vAftvFpM9Nb4F9DlQlJ3xAG24U&usqp=CAU" />
          <Card.Body>
            <Card.Title>ALDOG'S</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Button variant="secondary">SELECT</Button>
          </Card.Body>
          </Card>
    </Col>
    <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://wallpaperaccess.com/full/1454638.jpg" />
          <Card.Body>
            <Card.Title>GUSION'S</Card.Title>
            <Card.Text>
           
            </Card.Text>
            <Button variant="secondary">SELECT</Button>
          </Card.Body>
          </Card>
    </Col>
    <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/236x/17/df/53/17df53a4731de37f602a24afd8dbfc11.jpg" />
          <Card.Body>
            <Card.Title>NANA'S</Card.Title>
            <Card.Text>
            
            </Card.Text>
            <Button variant="secondary">SELECT</Button>
          </Card.Body>
          </Card>
    </Col>
  </Row>

  
</Container>
<div className='footer'> 
MOBILE LEGENDS
</div>

</div>
  );
}

export default App;
