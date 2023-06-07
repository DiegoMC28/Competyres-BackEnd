import { Outlet } from "react-router-dom";
import logo from "../../resources/CompetyresSinFondo.png";
import CSS from "./Layout.module.css";
import Menu from "./Menu";

function Layout() {
  return (
    <>
      <div className={CSS.fotoFondo}>
        <img
          alt="Logo de la app"
          style={{ width: "200px", height: "200px" }}
          src={logo}
          className="App-logo"
        ></img>
      </div>
      <Menu />
      <main className={CSS.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
