import Moment from "react-moment";
import CSS from "./AssessmenCard.module.css";
import Stars from "./Stars";
import "moment/locale/es";

function AssessmentCard(props) {
    return (
        <div className={CSS.body}>
            <div>
                <h1 className="h2">{props.title}</h1>
                <span className={CSS.fecha}>
                    Publicado{" "}
                    <Moment fromNow locale="es">
                        {props.date}
                    </Moment>
                </span>
                <hr />
            </div>
            <p>{props.body}</p>
            <div>
                <hr />
                <Stars value={props.puntuacion}></Stars>
            </div>
        </div>
    );
}

export default AssessmentCard;
