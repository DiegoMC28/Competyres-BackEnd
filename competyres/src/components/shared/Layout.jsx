import { Outlet } from "react-router-dom";
import logo from "../../resources/LogoCabecera2.png";

import Menu from "./Menu";

function Layout() {
  return (
    <>
      <img
        alt="Logo de la app"
        style={{ width: "400px", height: "200px" }}
        src={logo}
        className="App-logo"
      ></img>
      <Menu />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
