import Session from "../../context/session-context";
import { useContext } from "react";
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
  const { bookingData, clearCircuit, clearCar, editLaps, doBooking, editDate } =
    useBooking();

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

  const onChangeDateHandler = (event) => {
    editDate(event.target.value);
  };

  const onChangeLapsHandler = (event) => {
    editLaps(event.target.value);
  };

  const bookingHandler = async () => {
    doBooking(token);
  };

  return (
    <div>
      <div className={CSS.cards}>
        <CircuitsCard
          className={CSS.cards}
          circuit={bookingData.circuito}
          onClick={onCircuitClickHandler}
        ></CircuitsCard>

        <CarsCard
          className={CSS.cards}
          car={bookingData.coche}
          onClick={onCarClickHandler}
        ></CarsCard>
        <Button onClick={clearCircuit} variant="danger">
          Quitar circuito
        </Button>
        <Button onClick={clearCar} variant="danger">
          Quitar coche
        </Button>
      </div>
      <div className={CSS.resto}>
        <h1>{bookingData.precio}€</h1>
        <div className={CSS.otro}>
          <input type="date" onChange={onChangeDateHandler}></input>
          <input type="number" onChange={onChangeLapsHandler}></input>
          <Button variant="success" onClick={bookingHandler}>
            Realizar reserva
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
