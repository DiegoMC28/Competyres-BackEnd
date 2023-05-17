import Card from "react-bootstrap/Card";
import Session from "../../context/session-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function CircuitsCard(props) {
  // Cambiar el contexto para usarlo desde fuera de los componentes
  const { userData } = useContext(Session);
  const { isLogged } = userData;
  const navigate = useNavigate();

  const seeMoreHandler = (event) => {
    if (isLogged) {
      navigate("/seemore");
    } else {
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
        <Card.Title>{"Nombre: " + props.name}</Card.Title>
        <Card.Subtitle>{"Ubicacion: " + props.location}</Card.Subtitle>
        <Button onClick={seeMoreHandler} variant="success">
          Ver mas
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CircuitsCard;
