import { useContext } from "react";
import Session from "../../context/session-context";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Logo from "../../resources/LogoCabecera2.png";
import CSS from "./Menu.module.css";
import icono from "../../resources/user-icon.webp";
import iconoBandera from "../../resources/flag-icon.webp";

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
          <div className={CSS.navProfile}>
            <NavLink to="/bookings">
              <img alt="ver reserva" src={iconoBandera}></img>
            </NavLink>
            <NavLink  to="/profile">
              <img alt="ver perfil" src={icono}></img>
            </NavLink>
          </div>
        )}
      </Nav>
    </Navbar>
  );
}

export default Menu;
