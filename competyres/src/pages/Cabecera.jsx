import { Outlet, useNavigation } from 'react-router-dom';
import logo from '../logo.svg';

import BarraMenu from '../components/BarraMenu/BarraMenu';

function Cabecera() {
  return (
    <>
      <div className='fondoOscuro'>
        <img src={logo} className="App-logo"></img>
        <BarraMenu />
        <main >
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Cabecera;
