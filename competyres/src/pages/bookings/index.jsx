import Session from "../../context/session-context";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import CarsCard from "../../components/CarsCard";
import useBooking from "../../hooks/useBooking";

const Booking = () => {
  const { userData, onLogout } = useContext(Session);
  const navigate = useNavigate();
  const { token, isLogged } = userData;
  const [bookings, setBookings] = useState([]);
  const { sendRequest } = useHttp();
  const { bookingData } = useBooking();

  useEffect(() => {
    if (isLogged) {
      const config = {
        url: "/alquileres",
        method: "GET",
        headers: { Authorization: token },
      };

      sendRequest(config).then((bookings) => {
        setBookings(bookings);
      });
    }
  }, [isLogged]);

  const onCarClickHandler = (car) => {
    if (!car) {
      navigate("/cars");
    }
  };

  return (
    <div>
      <CarsCard car={bookingData.coche} onClick={onCarClickHandler}></CarsCard>
      <input type="date" value={bookingData.fecha}></input>
      <h1>{bookingData.precio}€</h1>
      <input type="number" value={bookingData.vueltas}></input>
    </div>
  );
};

export default Booking;
