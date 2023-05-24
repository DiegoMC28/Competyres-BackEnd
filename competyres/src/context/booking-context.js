import React, { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";

const bookingModel = {
  _id: "",
  coche: {},
  circuito: {},
  fecha: "",
  vueltas: 0,
  precio: 0,
};

const Booking = React.createContext({
  bookingData: bookingModel,
});

export const BookingProvider = (props) => {
  const [bookingData, setBookingData] = useState(bookingModel);
  const { sendRequest } = useHttp();

  useEffect(() => {
    const token = localStorage.getItem("Sesion");

    const config = {
      url: "/alquileres",
      method: "GET",
      headers: { Authorization: token },
    };

    sendRequest(config).then((alquileres) => {
      if (!alquileres.error) {
        setBookingData({ ...alquileres, token: token });
      }
    });
  }, []);

  

  return (
    <Booking.Provider
      value={{
        bookingData: bookingData,
      }}
    >
      {props.children}
    </Booking.Provider>
  );
};

export default Session;
