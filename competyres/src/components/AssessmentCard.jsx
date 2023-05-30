import Moment from "react-moment";
import Logo from "../resources/LogoCabecera2.png";
import CSS from "./AssessmenCard.module.css";
import Stars from "./Stars";

function AssessmentCard(props) {
  return (
    <div className={CSS.body}>
      <h1>{props.title}</h1>
      <Stars value={props.puntuacion}></Stars>
      <p>{props.body}</p>
      <hr />
      <p className={CSS.fecha}>
        Publicado el dia <Moment format="YYYY/MM/DD">{props.date}</Moment> a las{" "}
        <Moment format="hh:mm">{props.date}</Moment>
      </p>
      <hr />
    </div>
  );
}

export default AssessmentCard;
