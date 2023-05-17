import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Session from "../../context/session-context";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProfileCard(props) {
  const { onLogout } = useContext(Session);

  const navigate = useNavigate();

  const logoutHandler = () => {
    onLogout();

    navigate("/");
  };

  return (
    <Card style={{ width: "50rem" }}>
      <Card.Header>
        <h1>Tu Perfil</h1>
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <h4>Nombre: {props.Name}</h4>
            </Col>
            <Col>
              <h4>Apellido: {props.LastName}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Edad: {props.Age}</h4>
            </Col>
            <Col>
              <h4>Email: {props.Email}</h4>
            </Col>
          </Row>
        </Container>
      </Card.Body>
      <Button onClick={logoutHandler} variant="success">
        Logout
      </Button>
    </Card>
  );
}

export default ProfileCard;
