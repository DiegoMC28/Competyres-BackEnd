import { useState } from "react";
import { Form } from "react-bootstrap";
import useBooking from "../hooks/useBooking";
import CSS from "./DateComponent.module.css";

const DateComponent = () => {
    const { editDate, bookingData } = useBooking();
    const { fecha } = bookingData;

    const onChangeDateHandler = (event) => {
        editDate(event.target.value);
    };

    return (
        <div>
            <Form.Control
                className={CSS.pointer}
                type="date"
                onChange={onChangeDateHandler}
                value={fecha.toISOString().split("T")[0]}
                min={new Date().toISOString().slice(0, 10)}
            />
        </div>
    );
};

export default DateComponent;
