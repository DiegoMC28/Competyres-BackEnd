import Card from "react-bootstrap/Card";

function CircuitsCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Header>
          <Card.Img
            variant="top"
            style={{ width: "18rem" }}
            src={props.image}
          />
        </Card.Header>
        <Card.Title>{"Nombre: " + props.name}</Card.Title>
        <Card.Subtitle>{"Ubicacion: " + props.location}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default CircuitsCard;
