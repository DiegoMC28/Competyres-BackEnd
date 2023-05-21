import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function ProfileCard(props) {
  return (
    <Card style={{ width: "50rem" }}>
      <Card.Header>
        <h1>Tu Perfil</h1>
      </Card.Header>
      <Card.Body>
        <h4>Nombre: {props.Name}</h4>

        <h4>Apellido: {props.LastName}</h4>

        <h4>Edad: {props.Age}</h4>

        <h4>Email: {props.Email}</h4>
      </Card.Body>
      <Button onClick={props.logoutHandler} variant="success">
        Logout
      </Button>
    </Card>
  );
}

export default ProfileCard;
