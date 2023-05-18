import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row } from "react-bootstrap";

function CarsDetailsCard(props) {
  const { car, isLogged } = props;
  const {
    modelo,
    escuderia,
    categoria,
    ultimoAñoDeCompeticion,
    precio,
    descripcion,
    disponible,
  } = car;

  return (
    <Card style={{ width: "50rem" }}>
      <Card.Header>
        <h1>Coche</h1>
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <h4>Escuderia: {escuderia}</h4>
            </Col>
            <Col>
              <h4>Modelo: {modelo}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Categoria: {categoria}</h4>
            </Col>
            <Col>
              <h4>Ultimo año de competicion: {ultimoAñoDeCompeticion}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Precio: {precio}</h4>
            </Col>
            <Col>
              <h4>
                Disponibilidad: {disponible ? "Disponible" : "No disponible"}
              </h4>
            </Col>
          </Row>
          <Card.Text>
            Descripcion:
            {descripcion}
          </Card.Text>
        </Container>
      </Card.Body>
      {isLogged && <Button variant="success">Reservar</Button>}
    </Card>
  );
}

export default CarsDetailsCard;
