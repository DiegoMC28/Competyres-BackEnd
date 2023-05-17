import { useContext } from "react";
import Session from "../../context/session-context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Logo from "../../resources/LogoCabecera2.png";

function Menu() {
  const { userData } = useContext(Session);
  const { isLogged } = userData;
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <NavLink to="/">
        <Navbar.Brand>
          <img
            alt="Logo de la app"
            style={{ width: "100px", height: "50px" }}
            src={Logo}
            className="App-logo"
          ></img>
        </Navbar.Brand>
      </NavLink>
      <Nav className="m-auto">
        <NavLink to="/cars">Coches</NavLink>
        <NavLink to="/circuits">Circuitos</NavLink>
      </Nav>
      <Nav className="m-auto">
        {isLogged && <NavLink to="/profile">Perfil</NavLink>}
      </Nav>
    </Navbar>
  );
}

export default Menu;
