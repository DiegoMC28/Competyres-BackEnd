import Card from "react-bootstrap/Card";

function CarsCard(props) {
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
        <Card.Title>{props.team + " " + props.model}</Card.Title>
        <Card.Subtitle>{"Categoria: " + props.category}</Card.Subtitle>
        <Card.Subtitle>
          {"Ultimo año de competicion: " + props.lastYearOfCompetition}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default CarsCard;
