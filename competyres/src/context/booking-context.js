import React, { useState } from "react";

const bookingModel = {
  coche: undefined,
  circuito: undefined,
  fecha: "",
  vueltas: 1,
  precio: 0,
};

const Booking = React.createContext({
  bookingData: bookingModel,
  addCar: (car) => {},
  clearCar: () => {},
  addCircuit: (circuit) => {},
  clearCircuit: () => {},
  editLaps: (laps) => {},
});

export const BookingProvider = (props) => {
  const [bookingData, setBookingData] = useState(bookingModel);

  const addCar = (car) => {
    setBookingData((prevState) => {
      return { ...prevState, coche: car };
    });
  };

  const clearCar = () => {
    setBookingData((prevState) => {
      return { ...prevState, coche: bookingModel.coche };
    });
  };

  const addCircuit = (circuit) => {
    setBookingData((prevState) => {
      return { ...prevState, circuito: circuit };
    });
  };

  const clearCircuit = () => {
    setBookingData((prevState) => {
      return { ...prevState, circuito: bookingModel.circuito };
    });
  };

  const editLaps = (laps) => {
    setBookingData((prevState) => {
      return { ...prevState, vueltas: laps };
    });
  };

  
  let price = bookingData.coche?.precio + bookingData?.vueltas * 50;

  return (
    <Booking.Provider
      value={{
        bookingData: { ...bookingData, precio: price },
        addCar: addCar,
        clearCar: clearCar,
        addCircuit: addCircuit,
        clearCircuit: clearCircuit,
        editLaps: editLaps,
      }}
    >
      {props.children}
    </Booking.Provider>
  );
};

export default Booking;
