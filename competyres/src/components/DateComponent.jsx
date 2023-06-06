import { useState } from "react";
import { Form } from "react-bootstrap";
import useBooking from "../hooks/useBooking";
import CSS from "./DateComponent.module.css";

const DateComponent = () => {
    const { editDate, bookingData } = useBooking();
    const { fecha } = bookingData;
    const fechaMinima = new Date();
    fechaMinima.setDate(fechaMinima.getDate() + 7);

    const onChangeDateHandler = (event) => {
        editDate(new Date(event.target.value + "T00:00:00"));
    };

    return (
        <div>
            <Form.Control
                className={CSS.pointer}
                type="date"
                onChange={onChangeDateHandler}
                value={fecha.toISOString().split("T")[0]}
                min={fechaMinima.toISOString().slice(0, 10)}
            />
        </div>
    );
};

export default DateComponent;
