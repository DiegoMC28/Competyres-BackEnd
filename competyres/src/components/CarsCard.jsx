import Card from "react-bootstrap/Card";
import CSS from "./Card.module.css";

function CarsCard(props) {
  const { escuderia, modelo, categoria, ultimoAñoDeCompeticion, imagen } =
    props.car ?? {};
  const { onClick } = props;
  const onClickHandler = () => {
    onClick(props.car);
  };

  return (
    <Card onClick={onClickHandler} className={CSS.cardStyle}>
      <Card.Body>
        {props.car ? (
          <>
            <Card.Header>
              <Card.Img variant="top" src={imagen} />
            </Card.Header>
            <Card.Title>{escuderia + " " + modelo}</Card.Title>
            <Card.Subtitle>{"Categoria: " + categoria}</Card.Subtitle>
            <Card.Subtitle>
              {"Ultimo año de competicion: " + ultimoAñoDeCompeticion}
            </Card.Subtitle>
          </>
        ) : (
          <>
            <h1>Elije Coche</h1>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default CarsCard;
