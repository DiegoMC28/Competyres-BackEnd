import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import Session from "../../context/session-context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <Form onSubmit={onSubmitHandler}>
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <div>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" id="email" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" id="password" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <Button type="submit" variant="success">
                    Submit
                  </Button>
                </div>
                {error && <Alert variant="danger">{error}</Alert>}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Form>
  );
};

export default Login;
