import { Form } from "react-bootstrap";
import useBooking from "../hooks/useBooking";
import CSS from "./BookingDate.module.css";
import moment from "moment";

const BookingDate = () => {
    const { editDate, bookingData } = useBooking();
    const { fecha } = bookingData;
    const fechaMinima = moment().add(7, "days");
    const formatoFechaMinima = moment(fechaMinima).format("YYYY-MM-DD");

    const onChangeDateHandler = (event) => {
        const fechaValue = event.target.value;
        editDate(moment(fechaValue, "YYYY-MM-DD"));
    };

    return (
        <div>
            <Form.Control
                className={CSS.pointer}
                type="date"
                onChange={onChangeDateHandler}
                value={fecha.format('YYYY-MM-DD')}
                min={formatoFechaMinima}
            />
        </div>
    );
};

export default BookingDate;
