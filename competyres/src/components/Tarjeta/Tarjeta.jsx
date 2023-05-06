import Card from 'react-bootstrap/Card';


function Tarjeta(props) {
  return (
    <Card style={{ width: '50rem', }}> 
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.cuerpo}
        </Card.Text>
        <Card.Img variant="top" style={{ width: '18rem', }} src={props.imagen} />
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;