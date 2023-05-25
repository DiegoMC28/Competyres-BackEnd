import Moment from "react-moment";
import Logo from "../resources/LogoCabecera2.png";
import CSS from "./NoticeCard.module.css";

function NoticeCard(props) {
  return (
    <div className={CSS.body}>
      <div className={CSS.centrado}>
      <img src={Logo} />
      </div>
      <h1>{props.title}</h1>
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

export default NoticeCard;
