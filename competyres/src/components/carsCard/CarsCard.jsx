import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Session from "../../context/session-context";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CarsCard(props) {
  const { userData } = useContext(Session);
  const { isLogged } = userData;
  const navigate = useNavigate();

  const seeMoreHandler = (event) => {

    if(isLogged){
      navigate("/seemore");
    }else{
      navigate("/login");
    }
    
  };

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
        <Button onClick={seeMoreHandler} variant="success">
          Ver mas
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CarsCard;
