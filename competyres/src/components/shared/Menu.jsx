import { useContext } from "react";
import Session from "../../context/session-context";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Logo from "../../resources/LogoCabecera2.png";
import CSS from "./Menu.module.css";
import icono from "../../resources/user-icon.webp";

function Menu() {
  const { userData } = useContext(Session);
  const { isLogged } = userData;
  return (
    <Navbar className={CSS.navBar} expand="lg">
      <NavLink to="/" className={CSS.navBrand}>
        <Navbar.Brand>
          <img alt="Logo de la app" src={Logo} className={CSS.imgLogo}></img>
        </Navbar.Brand>
      </NavLink>
      <Nav className={CSS.navTabs}>
        <div>
          <NavLink to="/">Noticias</NavLink>
        </div>
        <div>
          <NavLink to="/cars">Coches</NavLink>
        </div>
        <div>
          <NavLink to="/circuits">Circuitos</NavLink>
        </div>
      </Nav>
      <Nav className={CSS.navProfile}>
        {isLogged && (
          <NavLink to="/profile">
            <img src={icono}></img>
          </NavLink>
        )}
      </Nav>
    </Navbar>
  );
}

export default Menu;
