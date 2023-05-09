import Container from "react-bootstrap/esm/Container";
import useInput from "../hooks/use-input";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import useHttp from "../hooks/use-http";
import "../App.css";
import { Link } from "react-router-dom";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isValidContraseña = (value) => value.trim().length > 8;

const Login = () => {
  const { isLoading, error, sendRequest } = useHttp();

  const usuarioHandler = async () => {
    const config = {
      url: "/usuario",
      method: "POST"
    };

    const respuesta = await sendRequest(config);

    console.log(respuesta);
  };

  const {
    value: valorEmail,
    hasError: errorEnEmail,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: valorContraseña,
    hasError: errorEnContraseña,
    valueChangeHandler: contraseñaChangeHandler,
    inputBlurHandler: contraseñaBlurHandler,
    reset: resetContraseña,
  } = useInput(isValidContraseña);

  let formIsValid = false;

  const onClickHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    usuarioHandler();
    resetEmail();
    resetContraseña();
  };

  return (
    <Form>
      <br />
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Text>
            <Container>
              <Row>
                <Col>
                  <div>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      id="email"
                      value={valorEmail}
                      onChange={emailChangeHandler}
                      onBlur={emailBlurHandler}
                    />
                    <br />
                    {errorEnEmail && (
                      <Alert variant="danger">
                        Por favor introduzca el email
                      </Alert>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
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
                    <br />
                    {errorEnContraseña && (
                      <Alert variant="danger">
                        Porfavor introduzca una contraseña valida
                      </Alert>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
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
              </Row>
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </Form>
  );
};

export default Login;
