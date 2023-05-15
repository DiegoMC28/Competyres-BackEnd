import { Outlet } from "react-router-dom";
import logo from "../logo.svg";

import BarraMenu from "../components/BarraMenu/BarraMenu";
import Session from "../store/session-context";
import { useContext } from "react";

function Layout() {
  const { userData } = useContext(Session);

  return (
    <>
      <div className="fondoOscuro">
        <h1>{userData.nombre}</h1>
        <img alt="Logo de la app" src={logo} className="App-logo"></img>
        <BarraMenu />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
