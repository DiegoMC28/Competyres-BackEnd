import Card from "react-bootstrap/Card";

import { Button } from "react-bootstrap";

function CarsCard(props) {
  const { _id, escuderia, modelo, categoria, ultimoAñoDeCompeticion, imagen } =
    props.car;
  const {detailsHandler} = props;
  const onClickHandler = () => {
    detailsHandler(_id);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Header>
          <Card.Img variant="top" style={{ width: "18rem" }} src={imagen} />
        </Card.Header>
        <Card.Title>{escuderia + " " + modelo}</Card.Title>
        <Card.Subtitle>{"Categoria: " + categoria}</Card.Subtitle>
        <Card.Subtitle>
          {"Ultimo año de competicion: " + ultimoAñoDeCompeticion}
        </Card.Subtitle>
        <Button key={_id} onClick={onClickHandler} variant="success">
          Ver mas
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CarsCard;
