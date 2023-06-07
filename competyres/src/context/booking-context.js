import React, { useState } from "react";
import useHttp from "../hooks/use-http";
import moment from "moment";

const fechaDefault = moment().add(7, 'days');

const bookingModel = {
    _id: "",
    coche: undefined,
    circuito: undefined,
    fecha: fechaDefault,
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
    doBooking: (token) => {},
    editDate: (date) => {},
});

export const BookingProvider = (props) => {
    const [bookingData, setBookingData] = useState(bookingModel);
    const { sendRequest } = useHttp();
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
        let price =
            bookingData.coche?.precio +
            bookingData?.vueltas * bookingData.circuito?.precioPorVuelta;

        setBookingData((prevState) => {
            return { ...prevState, vueltas: laps, precio: price };
        });
    };

    const editDate = (date) => {

        setBookingData((prevState) => {
            clearCar();
            clearCircuit();
            return { ...prevState, fecha: date };
        });
    };

    const doBooking = async (token) => {
        const { coche, circuito, fecha, precio, vueltas } = bookingData;
        const config = {
            url: "/alquiler",
            method: "POST",
            headers: { Authorization: token },
            body: {
                coche: coche._id,
                circuito: circuito._id,
                fecha: fecha.format("YYYY-MM-DD"),
                vueltas: vueltas,
                precio: precio,
            },
        };

        const respuesta = await sendRequest(config);

        return respuesta;
    };

    return (
        <Booking.Provider
            value={{
                bookingData: { ...bookingData },
                addCar: addCar,
                clearCar: clearCar,
                addCircuit: addCircuit,
                clearCircuit: clearCircuit,
                editLaps: editLaps,
                doBooking: doBooking,
                editDate: editDate,
            }}
        >
            {props.children}
        </Booking.Provider>
    );
};

export default Booking;
