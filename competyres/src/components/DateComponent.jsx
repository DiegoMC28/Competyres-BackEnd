import { useState } from "react";
import { Form } from "react-bootstrap";
import useBooking from "../hooks/useBooking";

const DateComponent = () => {
    const { editDate, bookingData } = useBooking();
    const { fecha } = bookingData;

    const onChangeDateHandler = (event) => {
        editDate(event.target.value);
    };

    return (
        <>
            <Form.Control
                type="date"
                onChange={onChangeDateHandler}
                value={fecha}
                min={new Date().toISOString().slice(0, 10)}
            ></Form.Control>
        </>
    );
};

export default DateComponent;
