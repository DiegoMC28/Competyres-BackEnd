import { useContext, useEffect, useState } from "react";
import CarsDetailsComponent from "../../components/CarsDetails";
import useHttp from "../../hooks/use-http";
import { useParams } from "react-router-dom";
import Session from "../../context/session-context";
import CSS from "./CarsDetails.module.css";
import useBooking from "../../hooks/useBooking";
import moment from "moment";

const CarsDetails = () => {
    const params = useParams();
    const { id } = params;
    const { bookingData } = useBooking();
    const { fecha } = bookingData;
    const { sendRequest } = useHttp();
    const [coche, setCoche] = useState([]);
    const { userData } = useContext(Session);
    const { isLogged } = userData;

    useEffect(() => {
        const formatoFecha = moment(fecha).format("YYYY-MM-DD");

        const config = {
            url: "/coche/" + id + "?fecha=" + formatoFecha,
            method: "GET",
        };

        sendRequest(config).then((respuesta) => {
            setCoche(respuesta);
        });
    }, [sendRequest, id, fecha]);

    return (
        <div className={CSS.page}>
            <CarsDetailsComponent car={coche} isLogged={isLogged} />
        </div>
    );
};

export default CarsDetails;
