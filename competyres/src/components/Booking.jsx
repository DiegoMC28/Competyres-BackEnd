import CSS from "./Booking.module.css";
import Moment from "react-moment";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import Session from "../context/session-context";

function Booking(props) {
    const { _id, coche, circuito, fecha, vueltas, precio } = props.booking;
    const { onCancelHandler } = props;
    const { userData } = useContext(Session);
    const { token } = userData;

    const onClickHandler = () => {
        onCancelHandler(token, _id);
    };

    const hoy = new Date();
    const bookingDate = new Date(fecha);

    return (
        <div className={CSS.card}>
            <h3>
                Reserva del dia <Moment format="YYYY/MM/DD">{fecha}</Moment> a
                las <Moment format="hh:mm">{fecha}</Moment>
            </h3>
            <h4>
                {vueltas} vueltas a el {circuito.nombre}
            </h4>
            <h4>
                con el {coche.escuderia} {coche.modelo} por {precio}€
            </h4>
            {hoy <= bookingDate && (
                <a
                    variant="danger"
                    className={CSS.enlace}
                    onClick={onClickHandler}
                >
                    Cancelar reserva
                </a>
            )}
        </div>
    );
}

export default Booking;
