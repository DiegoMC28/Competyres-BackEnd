import Moment from "react-moment";
import Logo from "../resources/LogoCabecera2.png";
import CSS from "./AssessmenCard.module.css";
import Stars from "./Stars";
import 'moment/locale/es';

function AssessmentCard(props) {
  return (
    <div className={CSS.body}>
      <h1>{props.title}</h1>
      <Stars value={props.puntuacion}></Stars>
      <hr />
      <p>{props.body}</p>
      <p className={CSS.fecha}>
        Publicado <Moment fromNow locale="es">{props.date}</Moment>
      </p>
      <hr />
    </div>
  );
}

export default AssessmentCard;
