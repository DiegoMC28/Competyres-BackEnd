import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row } from "react-bootstrap";

function CircuitsDetailsCard(props) {
  const { circuit, isLogged } = props;
  const {
    nombre,
    ubicacion,
    extension,
    descripcion,
    capacidadCoches,
  } = circuit;

  return (
    <Card style={{ width: "50rem" }}>
      <Card.Header>
        <h1>Circuito</h1>
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <h4>Nombre: {nombre}</h4>
            </Col>
            <Col>
              <h4>Ubicacion: {ubicacion}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Extension: {extension}</h4>
            </Col>
            <Col>
              <h4>Capacidad de Coches: {capacidadCoches}</h4>
            </Col>
          </Row>
          <Card.Text>
            Descripcion:
            {descripcion}
          </Card.Text>
        </Container>
      </Card.Body>
      {isLogged && <Button variant="success">
        Reservar
      </Button> }
    </Card>
  );
}

export default CircuitsDetailsCard;
