import logo from './logo.svg';
import './App.css';
import BarraMenu from './Componentes/BarraMenu/BarraMenu';
import CuerpoPagina from './Componentes/CuerpoPagina/CuerpoPagina';

function App() {
  return (
    <div className='fondoOscuro'>
      <img src={logo} className="App-logo"></img>
      <BarraMenu></BarraMenu>
      <CuerpoPagina></CuerpoPagina>
    </div>
  );
}

export default App;
