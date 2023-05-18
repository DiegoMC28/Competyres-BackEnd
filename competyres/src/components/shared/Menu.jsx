import { useContext } from "react";
import Session from "../../context/session-context";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Logo from "../../resources/LogoCabecera2.png";
import CSS from "./Menu.module.css";

function Menu() {
  const { userData } = useContext(Session);
  const { isLogged } = userData;
  return (
    <Navbar className={CSS.navBar}  expand="lg">
      <NavLink to="/" className={CSS.navBrand}>
        <Navbar.Brand >
          <img
            alt="Logo de la app"
            style={{ width: "100px", height: "50px" }}
            src={Logo}
            className="App-logo"
          ></img>
        </Navbar.Brand>
      </NavLink>
      <Nav className={CSS.navTabs}>
        <div>
          <NavLink to="/cars">Coches</NavLink>
        </div>
        <div>
          <NavLink to="/circuits">Circuitos</NavLink>
        </div>
      </Nav>
      <Nav className={CSS.navProfile}>
        {isLogged && <NavLink to="/profile">Perfil</NavLink>}
      </Nav>
    </Navbar>
  );
}

export default Menu;
