import Container from "react-bootstrap/esm/Container";
import useInput from "../../hooks/use-input";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import useHttp from "../../hooks/use-http";
import { Link } from "react-router-dom";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isValidContraseña = (value) => value.trim().length > 8;

const Resgistrarse = () => {
  const { isLoading, error, sendRequest } = useHttp();

  const usuarioHandler = async () => {
    const config = {
      url: "/usuario",
      method: "POST",
      body: {
        nombre: valorNombre,
        apellido: valorPrimerApellido,
        edad: valorEdad,
        email: valorEmail,
        contrasena: valorContraseña,
      },
    };

    const respuesta = await sendRequest(config);

    console.log(respuesta);
  };

  const {
    value: valorNombre,
    isValid: nombreEsValido,
    hasError: ErrorEnNombre,
    valueChangeHandler: nombreChangeHandler,
    inputBlurHandler: nombreBlurHandler,
    reset: resetNombre,
  } = useInput(isNotEmpty);
  const {
    value: valorPrimerApellido,
    isValid: primerApellidoEsValido,
    hasError: ErrorEnPrimerApellido,
    valueChangeHandler: primerApellidoChangeHandler,
    inputBlurHandler: primerApellidoBlurHandler,
    reset: resetPrimerApellido,
  } = useInput(isNotEmpty);
  const {
    value: valorEdad,
    isValid: EdadEsValida,
    hasError: ErrorEnEdad,
    valueChangeHandler: edadChangeHandler,
    inputBlurHandler: edadBlurHandler,
    reset: resetEdad,
  } = useInput(isNotEmpty);
  const {
    value: valorEmail,
    isValid: emailEsValido,
    hasError: errorEnEmail,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: valorContraseña,
    isValid: contraseñaEsValida,
    hasError: errorEnContraseña,
    valueChangeHandler: contraseñaChangeHandler,
    inputBlurHandler: contraseñaBlurHandler,
    reset: resetContraseña,
  } = useInput(isValidContraseña);

  let formIsValid = false;

  if (
    nombreEsValido &&
    primerApellidoEsValido &&
    EdadEsValida &&
    emailEsValido &&
    contraseñaEsValida
  ) {
    formIsValid = true;
  }

  const onClickHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    usuarioHandler();
    resetNombre();
    resetPrimerApellido();
    resetEdad();
    resetEmail();
    resetContraseña();
  };

  return (
    <Form>
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Text>
            <Container>
              <Row>
                <Col>
                  <div>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      id="nombre"
                      value={valorNombre}
                      onChange={nombreChangeHandler}
                      onBlur={nombreBlurHandler}
                    />
                    {ErrorEnNombre && (
                      <Alert variant="danger">
                        Por favor introduzca un nombre.
                      </Alert>
                    )}
                  </div>
                </Col>
                <Col>
                  <div>
                    <Form.Label>Primer apellido</Form.Label>
                    <Form.Control
                      type="text"
                      id="apellido"
                      value={valorPrimerApellido}
                      onChange={primerApellidoChangeHandler}
                      onBlur={primerApellidoBlurHandler}
                    />
                    {ErrorEnPrimerApellido && (
                      <Alert variant="danger">
                        Por favor introduzca el primer apellido
                      </Alert>
                    )}
                  </div>
                </Col>
                <Col>
                  <div>
                    <Form.Label htmlFor="edad">Edad</Form.Label>
                    <Form.Control
                      type="number"
                      id="edad"
                      value={valorEdad}
                      onChange={edadChangeHandler}
                      onBlur={edadBlurHandler}
                    />
                    {ErrorEnEdad && (
                      <Alert variant="danger">
                        Por favor introduzca la edad
                      </Alert>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control
                      type="text"
                      id="email"
                      value={valorEmail}
                      onChange={emailChangeHandler}
                      onBlur={emailBlurHandler}
                    />

                    {errorEnEmail && (
                      <Alert variant="danger">
                        Porfavor introduzca un email valido
                      </Alert>
                    )}
                  </div>
                </Col>
                <Col>
                  <div>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      id="contraseña"
                      value={valorContraseña}
                      onChange={contraseñaChangeHandler}
                      onBlur={contraseñaBlurHandler}
                    />

                    {errorEnContraseña && (
                      <Alert variant="danger">
                        Porfavor introduzca una contraseña valida
                      </Alert>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <div>
                    <Button
                      onClick={onClickHandler}
                      variant="success"
                      disabled={!formIsValid}
                    >
                      <Link to="/">{isLoading ? "Enviando..." : "Submit"}</Link>
                    </Button>
                  </div>
                  {error && <Alert variant="danger">{error}</Alert>}
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
    </Form>
  );
};

export default Resgistrarse;