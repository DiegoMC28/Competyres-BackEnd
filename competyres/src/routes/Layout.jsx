import { Outlet } from 'react-router-dom';
import logo from '../logo.svg';

import BarraMenu from '../components/BarraMenu/BarraMenu';

function Layout() {
  return (
    <>
      <div className='fondoOscuro'>
        <img alt='Logo de la app' src={logo} className="App-logo"></img>
        <BarraMenu />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;