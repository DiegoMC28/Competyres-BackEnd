import Card from "react-bootstrap/Card";
import CSS from "./Card.module.css";

function CarsCard(props) {
  const { _id, escuderia, modelo, categoria, ultimoAñoDeCompeticion, imagen } =
    props.car;
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
        <Card.Title>{escuderia + " " + modelo}</Card.Title>
        <Card.Subtitle>{"Categoria: " + categoria}</Card.Subtitle>
        <Card.Subtitle>
          {"Ultimo año de competicion: " + ultimoAñoDeCompeticion}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default CarsCard;
