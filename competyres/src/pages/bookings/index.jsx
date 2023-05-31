import Session from "../../context/session-context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarsCard from "../../components/CarsCard";
import useBooking from "../../hooks/useBooking";
import CircuitsCard from "../../components/CircuitsCard";
import { Button } from "react-bootstrap";
import CSS from "./Bookings.module.css";

const Booking = () => {
    const { userData } = useContext(Session);
    const navigate = useNavigate();
    const { token } = userData;

    const {
        bookingData,
        clearCircuit,
        clearCar,
        editLaps,
        doBooking,
        editDate,
    } = useBooking();
    const [timeDisabled, setTimeDisabled] = useState(true);
    const [lapsDisabled, setLapsDisabled] = useState(true);
    const [bookingDisabled, setBookingDisabled] = useState(true);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

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

    const onChangeTimeHandler = (event) => {
        setTime(event.target.value);
        console.log(bookingData.fecha);
        let fullDate = date + "T" + event.target.value;
        editDate(fullDate);
        if (bookingData.coche && bookingData.circuito) {
            setLapsDisabled(false);
        }
    };

    const onChangeDateHandler = (event) => {
        setDate(event.target.value);
        editDate(date);
        if (bookingData.coche && bookingData.circuito) {
            setTimeDisabled(false);
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
                    <input type="date" onChange={onChangeDateHandler}></input>
                    <input
                        type="time"
                        onChange={onChangeTimeHandler}
                        disabled={timeDisabled}
                    ></input>
                    <input
                        type="number"
                        onChange={onChangeLapsHandler}
                        disabled={lapsDisabled}
                    ></input>

                    <Button
                        variant="success"
                        onClick={bookingHandler}
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
