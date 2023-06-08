import Session from "../../context/session-context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarsCard from "../../components/CarsCard";
import useBooking from "../../hooks/useBooking";
import DateComponent from "../../components/BookingDate";
import CircuitsCard from "../../components/CircuitsCard";
import { Button, Form, Modal } from "react-bootstrap";
import CSS from "./Bookings.module.css";

const Booking = () => {
    const { userData } = useContext(Session);
    const navigate = useNavigate();
    const { token } = userData;
    const [modalShow, setModalShow] = useState(false);

    const { bookingData, clearCircuit, clearCar, editLaps, doBooking } =
        useBooking();

    const [bookingDisabled, setBookingDisabled] = useState(true);

    const onClickModal = () => {
        setModalShow(true);
    };

    const onCarClickHandler = (car) => {
        if (!car) {
            navigate("/cars");
        }
    };

    const onCircuitClickHandler = (circuit) => {
        if (!circuit) {
            navigate("/circuits");
        }
    };

    const onChangeLapsHandler = (event) => {
        editLaps(event.target.value);
        if (bookingData.coche && bookingData.circuito) {
            setBookingDisabled(false);
        }
    };

    const bookingHandler = async () => {
        await doBooking(token);
        clearCar();
        clearCircuit();
        editLaps(0);
        navigate("/profile");
    };

    return (
        <div className={CSS.borders}>
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
                        Realizar reserva
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={CSS.modal}>
                    <p>¿Esta seguro de realizar la reserva?</p>
                </Modal.Body>
                <Modal.Footer className={CSS.modal}>
                    <Button variant="success" onClick={bookingHandler}>
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
            <div className={CSS.cards}>
                <div>
                    <CircuitsCard
                        circuit={bookingData.circuito}
                        onClick={onCircuitClickHandler}
                    ></CircuitsCard>
                    {bookingData.circuito && (
                        <Button onClick={clearCircuit} variant="danger">
                            Quitar circuito
                        </Button>
                    )}
                </div>
                <div>
                    <CarsCard
                        car={bookingData.coche}
                        onClick={onCarClickHandler}
                    ></CarsCard>
                    {bookingData.coche && (
                        <Button onClick={clearCar} variant="danger">
                            Quitar coche
                        </Button>
                    )}
                </div>
            </div>
            <hr />

            <div className={CSS.resto}>
                <h1>{bookingData.precio}€</h1>
                <div className={CSS.otro}>
                    <DateComponent></DateComponent>
                    <Form.Control
                        type="number"
                        onChange={onChangeLapsHandler}
                        min={1}
                    />

                    <Button
                        variant="success"
                        onClick={onClickModal}
                        disabled={bookingDisabled}
                    >
                        Realizar reserva
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Booking;
