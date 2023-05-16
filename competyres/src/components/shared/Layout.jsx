import { Outlet } from "react-router-dom";
import logo from "../../resources/LogoCabecera2.png";

import Menu from "./Menu";
import Session from "../../context/session-context";
import { useContext } from "react";

function Layout() {
  const { userData } = useContext(Session);

  return (
    <>
      <div className="fondoOscuro">
        <h1>{userData.nombre}</h1>
        <img alt="Logo de la app" style={{width:"400px", height:"200px"}} src={logo} className="App-logo"></img>
        <Menu />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
