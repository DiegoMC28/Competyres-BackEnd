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
        // if (onlyOnce) {
        
        // console.log(new Date(moment().format("L")).toISOString());

        const config = {
            url: "/coche/" + id + "?fecha=" + fecha.toISOString(),
            method: "GET",
        };

        sendRequest(config).then((respuesta) => {
            setCoche(respuesta);
        });

        //onlyOnce = false;
        //}
    }, [sendRequest, id]);

    return (
        <div className={CSS.page}>
            <CarsDetailsComponent car={coche} isLogged={isLogged} />
        </div>
    );
};

export default CarsDetails;
