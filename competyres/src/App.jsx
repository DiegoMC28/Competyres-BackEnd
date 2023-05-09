import './App.css';
import Layout from './routes/Layout';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import ErrorPage from './pages/Error';
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import Resgistrarse from './pages/Registrarse';
import Coches from './pages/Coches';
import Circuito from './pages/Circuitos';
import Login from './pages/Login';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <PaginaPrincipal /> },
      {
        path: 'login',
        element: <Login />
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
