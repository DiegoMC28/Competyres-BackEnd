import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>Competyres</Navbar.Brand>
        </NavLink>
        <Nav className="m-auto">
          <NavLink to="/login">Inciar sesion</NavLink>
          <NavLink to="/singup">Registrarse</NavLink>
          <NavLink to="/cars">Coches</NavLink>
          <NavLink to="/circuits">Circuitos</NavLink>
          {/* <NavDropdown title="Algo" >
            <NavDropdown.Item href="#action/3.1">Coches</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Circuitos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Info</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;