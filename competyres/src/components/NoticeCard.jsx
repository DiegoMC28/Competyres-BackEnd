import Card from "react-bootstrap/Card";
import Moment from "react-moment";
function NoticeCard(props) {
  return (
    <Card style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
        <Card.Img variant="top" style={{ width: "18rem" }} src={props.image} />
      </Card.Body>
      <Card.Footer>
        Publicado el dia <Moment format="YYYY/MM/DD">{props.date}</Moment> a las{" "}
        <Moment format="hh:mm">{props.date}</Moment>
      </Card.Footer>
    </Card>
  );
}

export default NoticeCard;
