import { Alert, Button, Form } from "react-bootstrap";
import Session from "../../context/session-context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CSS from "./Login.module.css";

const Login = () => {
  const { onLogin, userData } = useContext(Session);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const { isLogged } = userData;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    onLogin(email.value, password.value).then(({ error }) => {
      if (error) {
        setError("Credenciales incorrectas");
      } else {
        navigate("/");
      }
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={CSS.page}>
        <h1>Introduzca su Correo y Contraseña</h1>
        <hr />
        <div>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" id="email" />
        </div>

        <div>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" id="password" />
        </div>

        <div className={CSS.center}>
          <Button type="submit" variant="success">
            Iniciar sesion
          </Button>
        </div>
      </div>
      <div className={CSS.alert}>
        {error && <Alert variant="danger">{error}</Alert>}
      </div>
    </form>
  );
};

export default Login;
