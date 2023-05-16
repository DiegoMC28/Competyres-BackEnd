import Card from "react-bootstrap/Card";

function NoticeCard(props) {
  return (
    <Card style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
        <Card.Img variant="top" style={{ width: "18rem" }} src={props.image} />
      </Card.Body>
      <Card.Footer>{props.date}</Card.Footer>
    </Card>
  );
}

export default NoticeCard;
