import './App.css';
import RootLayout from './pages/Cabecera';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import ErrorPage from './pages/Error';
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import PaginaPrueba from './pages/paginaprueba';
import Resgistrarse from './pages/Registrarse';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
