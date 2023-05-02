import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function BarraMenu() {
  return (
    <Navbar bg="danger" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="/">Competyres</Navbar.Brand>
        <Nav className='m-auto'>
          <Nav.Link href="/prueba">Inciar sesion</Nav.Link>
          <Nav.Link href="/registrarse">Registrarse</Nav.Link>
          <Nav.Link href="#home">Coches</Nav.Link>
          <Nav.Link href="#home">Circuitos</Nav.Link>
          <NavDropdown title="Algo"  >
            <NavDropdown.Item href="#action/3.1">Coches</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Circuitos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Info</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BarraMenu;