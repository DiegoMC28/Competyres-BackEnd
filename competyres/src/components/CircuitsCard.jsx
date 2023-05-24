import Card from "react-bootstrap/Card";
import CSS from "./Card.module.css";

function CircuitsCard(props) {
  const { _id, nombre, ubicacion, imagen } = props.circuit;
  const { detailsHandler } = props;
  const onClickHandler = () => {
    detailsHandler(_id);
  };

  return (
    <Card onClick={onClickHandler} className={CSS.cardStyle}>
      <Card.Body>
        <Card.Header>
          <Card.Img variant="top" src={imagen} />
        </Card.Header>
        <Card.Title>{"Nombre: " + nombre}</Card.Title>
        <Card.Subtitle>{"Ubicacion: " + ubicacion}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default CircuitsCard;
