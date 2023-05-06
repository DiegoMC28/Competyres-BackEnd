import './App.css';
import Layout from './pages/Layout';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import ErrorPage from './pages/Error';
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import PaginaPrueba from './pages/paginaprueba';
import Resgistrarse from './pages/Registrarse';
import Coches from './pages/Coches';
import Circuito from './pages/Circuitos';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <PaginaPrincipal /> },
      {
        path: 'prueba',
        element: <PaginaPrueba />
      },
      {
        path: 'registrarse',
        element: <Resgistrarse />
      },
      {
        path: 'coches',
        element: <Coches />
      },
      {
        path: 'circuitos',
        element: <Circuito />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
