import { useContext, useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { useParams } from "react-router-dom";
import CircuitsDetails from "../../components/CircuitsDetails";
import Session from "../../context/session-context";
import CSS from "./CircuitsDetails.module.css";
import useBooking from "../../hooks/useBooking";
import moment from "moment";

const CircuitDetails = () => {
    const params = useParams();
    const { id } = params;
    const { sendRequest } = useHttp();
    const { bookingData } = useBooking();
    const { fecha } = bookingData;
    const [circuito, setCircuito] = useState([]);
    const { userData } = useContext(Session);
    const { isLogged } = userData;

    useEffect(() => {
        const formatoFecha = moment(fecha).format("YYYY-MM-DD");

        const config = {
            url: "/circuito/" + id + "?fecha=" + formatoFecha,
            method: "GET",
        };

        sendRequest(config).then((respuesta) => {
            setCircuito(respuesta);
        });
    }, [sendRequest, id, fecha]);

    return (
        <div className={CSS.page}>
            <CircuitsDetails circuit={circuito} isLogged={isLogged} />
        </div>
    );
};

export default CircuitDetails;
