import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function CircuitsDetailsCard(props) {
  const { circuit, isLogged } = props;
  const { nombre, ubicacion, extension, descripcion, capacidadCoches } =
    circuit;

  return (
    <Card style={{ width: "50rem" }}>
      <Card.Header>
        <h1>Circuito</h1>
      </Card.Header>
      <Card.Body>
        <h4>Nombre: {nombre}</h4>

        <h4>Ubicacion: {ubicacion}</h4>

        <h4>Extension: {extension}</h4>

        <h4>Capacidad de Coches: {capacidadCoches}</h4>

        <Card.Text>
          Descripcion:
          {descripcion}
        </Card.Text>
      </Card.Body>
      {isLogged && <Button variant="success">Reservar</Button>}
    </Card>
  );
}

export default CircuitsDetailsCard;
