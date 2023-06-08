import CSS from "./Booking.module.css";
import { useContext, useState } from "react";
import Session from "../context/session-context";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment";

function Booking(props) {
    const { _id, coche, circuito, fecha, vueltas, precio } = props.booking;
    const { onCancelHandler } = props;
    const { userData } = useContext(Session);
    const { token } = userData;
    const [modalShow, setModalShow] = useState(false);

    const onClickHandler = () => {
        onCancelHandler(token, _id);
    };

    const onClickModal = () => {
        setModalShow(true);
    };

    const hoy = moment().format("YYYY-MM-DD");
    const bookingDate = fecha;

    return (
        <div className={CSS.card}>
            <Modal
                className={CSS.modal}
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className={CSS.modal}>
                    <Modal.Title
                        className={CSS.modal}
                        id="contained-modal-title-vcenter"
                    >
                        Cancelar reserva
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={CSS.modal}>
                    <p>¿Esta seguro de cancelar la reserva?</p>
                </Modal.Body>
                <Modal.Footer className={CSS.modal}>
                    <Button variant="success" onClick={onClickHandler}>
                        Si
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => setModalShow(false)}
                    >
                        No
                    </Button>
                </Modal.Footer>
            </Modal>

            <h3>Reserva para el dia {fecha}</h3>
            <h4>
                {vueltas} vueltas a el {circuito.nombre}
            </h4>
            <h4>
                con el {coche.escuderia} {coche.modelo} por {precio}€
            </h4>

            {hoy <= bookingDate && (
                <div className={CSS.izquierda}>
                    <a
                        variant="danger"
                        className={CSS.enlace}
                        onClick={onClickModal}
                    >
                        Cancelar reserva
                    </a>
                </div>
            )}
        </div>
    );
}

export default Booking;
