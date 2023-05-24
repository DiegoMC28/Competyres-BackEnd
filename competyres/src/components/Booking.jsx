import CSS from "./Booking.module.css";
import Moment from "react-moment";

function Booking(props) {
  const { coche, circuito, fecha, vueltas, precio } = props.booking;

  return (
    <div className={CSS.card}>
      <h3>
        Reserva del dia <Moment format="YYYY/MM/DD">{fecha}</Moment> a las{" "}
        <Moment format="hh:mm">{fecha}</Moment>
      </h3>
      <h4>
        {vueltas} vueltas a el {circuito.nombre}
      </h4>
      <h4>
        con el {coche.escuderia} {coche.modelo} por {precio}€
      </h4>
    </div>
  );
}

export default Booking;
