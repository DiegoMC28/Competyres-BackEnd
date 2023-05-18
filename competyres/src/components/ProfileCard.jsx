import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row } from "react-bootstrap";

function ProfileCard(props) {
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
      <Button onClick={props.logoutHandler} variant="success">
        Logout
      </Button>
    </Card>
  );
}

export default ProfileCard;
