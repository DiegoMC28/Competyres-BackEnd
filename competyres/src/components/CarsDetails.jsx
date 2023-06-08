import { Button } from "react-bootstrap";
import CSS from "./CarsDetails.module.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import useBooking from "../hooks/useBooking";
import { useNavigate } from "react-router-dom";
import flechaAtras from "../resources/flechas-izquierda.png";

function CarsDetails(props) {
    const { car, isLogged } = props;
    const {
        modelo,
        escuderia,
        categoria,
        ultimoAñoDeCompeticion,
        precio,
        descripcion,
        disponible,
        imagen,
        CV,
    } = car;
    const [open, setOpen] = useState(false);
    const { addCar } = useBooking();
    const navigate = useNavigate();

    const onClickHandler = () => {
        addCar(car);
        navigate("/bookings");
    };

    const onViewHandler = () => {
        setOpen(true);
    };

    const onBackClickHandler = () => {
        navigate("/cars");
    };
    const onCloseHandler = () => {
        setOpen(false);
    };

    return (
        <div>
            <img
                src={flechaAtras}
                onClick={onBackClickHandler}
                className={CSS.button}
            />
            <div className={CSS.body}>
                <img
                    src={imagen}
                    alt={escuderia + " " + modelo}
                    onClick={onViewHandler}
                />
                <Lightbox
                    open={open}
                    close={onCloseHandler}
                    slides={[{ src: imagen }]}
                />
                <style jsx="true" global="true">{`
                    .yarl__slide_image {
                        background-color: rgba(255, 255, 255);
                    }
                `}</style>
                <div className={CSS.texto}>
                    <h1>
                        {escuderia} {modelo}
                    </h1>
                    <hr></hr>
                    <h5>⨷ {categoria}</h5>
                    <h5>⨷ {CV}</h5>
                    <h5>
                        ⨷ Ultimo año de competicion: {ultimoAñoDeCompeticion}
                    </h5>
                    <h5>⨷ {precio}€</h5>
                    <h5>⨷ {disponible ? "Disponible" : "No disponible"}</h5>
                    <hr />
                    <h4>Descripcion</h4>
                    <p>{descripcion}</p>
                    {isLogged && disponible && (
                        <Button
                            className={CSS.button}
                            onClick={onClickHandler}
                            variant="success"
                        >
                            Añadir a la reserva
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CarsDetails;
