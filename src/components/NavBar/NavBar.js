import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function BasicExample() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tienda E-Commerce de Bebidas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Inicio</Link>
            <Link to="/productos/">Productos</Link>
            <Link to="contactanos">Contactanos</Link>
            <NavDropdown title="Preguntas Frecuentes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hacen eventos?</NavDropdown.Item>
              <Link to="/productos/licor">Licores</Link>
              <Link to="/productos/vodka">Vodka</Link>
              <Link to="/productos/whisky">Whisky</Link>
              <NavDropdown.Item href="#action/3.2">
                Como hago para comprar?
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cuanto cuesta el envio?</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Enviar mensaje
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Button variant="outline-success">Ir a pagar</Button>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default BasicExample;