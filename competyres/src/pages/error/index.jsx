import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let titulo = "Ha ocurrido un error!";
  let mensaje = "Algo ha ido mal!";

  if (error.status === 500) {
    mensaje = error.data.message;
  }

  if (error.status === 404) {
    titulo = "Error 404";
    mensaje = "No se encuentra la pagina.";
  }

  return (
    <>
      <h1>{titulo}</h1>
      <h2>{mensaje}</h2>
    </>
  );
}

export default ErrorPage;
