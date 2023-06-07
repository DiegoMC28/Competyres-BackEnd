import { useContext } from "react";
import Session from "../../context/session-context";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Logo from "../../resources/CompetyresSinFondo.png";
import CSS from "./Menu.module.css";
import icono from "../../resources/user-icon.webp";
import iconoBandera from "../../resources/flag-icon.webp";
import whiteCar from "../../resources/car-icon.webp";
import whiteStar from "../../resources/star-icon-white.webp";
import whitePing from "../../resources/location-icon.webp";

function Menu() {
    const { userData } = useContext(Session);
    const { isLogged } = userData;
    return (
        <Navbar className={CSS.navBar} expand="lg">
            <NavLink to="/" className={CSS.navBrand}>
                <Navbar.Brand>
                    <img
                        alt="Logo de la app"
                        src={Logo}
                        
                        className={CSS.imgLogo}
                    ></img>
                </Navbar.Brand>
            </NavLink>
            <Nav className={CSS.navTabs}>
                <div>
                    <img alt="" width={30} height={30} src={whiteStar} />
                    <NavLink to="/">Valoraciones</NavLink>
                </div>
                <div>
                    <img alt="" width={30} height={30} src={whiteCar} />
                    <NavLink to="/cars">Coches</NavLink>
                </div>
                <div>
                    <img alt="" width={30} height={30} src={whitePing} />
                    <NavLink to="/circuits">Circuitos</NavLink>
                </div>
            </Nav>
            <Nav className={CSS.navProfile}>
                {isLogged && (
                    <div className={CSS.navProfile}>
                        <NavLink to="/bookings">
                            <img alt="ver reserva" src={iconoBandera}></img>
                        </NavLink>
                        <NavLink to="/profile">
                            <img alt="ver perfil" src={icono}></img>
                        </NavLink>
                    </div>
                )}
            </Nav>
        </Navbar>
    );
}

export default Menu;
