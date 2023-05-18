import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function CircuitsCard(props) {
  const { _id, nombre, ubicacion, imagen } = props.circuit;
  const { detailsHandler } = props;
  const onClickHandler = () => {
    detailsHandler(_id);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Header>
          <Card.Img variant="top" style={{ width: "18rem" }} src={imagen} />
        </Card.Header>
        <Card.Title>{"Nombre: " + nombre}</Card.Title>
        <Card.Subtitle>{"Ubicacion: " + ubicacion}</Card.Subtitle>
        <Button onClick={onClickHandler} variant="success">
          Ver mas
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CircuitsCard;
