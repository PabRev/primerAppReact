import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function BasicExample() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Link className="dropdown-item my-auto me-2 fs-2" to="/">Tienda E-Commerce de Bebidas</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="dropdown-item my-auto text-muted me-2" to="/">Inicio</Link>
            <Link className="dropdown-item my-auto text-muted me-2" to="/productos/">Productos</Link>
            <Link className="dropdown-item my-auto text-muted me-2" to="contactanos">Contactanos</Link>
            <NavDropdown title="Acceso Rapido" id="basic-nav-dropdown">
              <Link className="dropdown-item my-auto" to="/productos/licor">Licores</Link>
              <Link className="dropdown-item my-auto" to="/productos/vodka">Vodka</Link>
              <Link className="dropdown-item my-auto" to="/productos/whisky">Whisky</Link>
              <NavDropdown.Item href="#action/3.1">Hacen eventos?</NavDropdown.Item>
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
          <Link className="dropdown-item my-auto text-muted me-2" to="/">Volver a comprar</Link>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default BasicExample;