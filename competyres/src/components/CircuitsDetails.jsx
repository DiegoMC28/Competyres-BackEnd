import { Button } from "react-bootstrap";
import CSS from "./CircuitsDetails.module.css";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import useBooking from "../hooks/useBooking";
import { useNavigate } from "react-router-dom";
import flechaAtras from "../resources/flechas-izquierda.png";

function CircuitsDetailsCard(props) {
    const { circuit, isLogged } = props;
    const navigate = useNavigate();
    const {
        nombre,
        ubicacion,
        extension,
        descripcion,
        imagen,
        disponible,
    } = circuit;

    const [open, setOpen] = useState(false);

    const { addCircuit } = useBooking();

    const onClickHandler = () => {
        addCircuit(circuit);
        navigate("/bookings");
    };

    const onViewHandler = () => {
        setOpen(true);
    };
    const onBackClickHandler = () => {
        navigate("/circuits");
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
                <img src={imagen} alt={nombre} onClick={onViewHandler} />
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
                    <h1>{nombre}</h1>
                    <hr></hr>
                    <h5>⨷ {ubicacion}</h5>
                    <h5>⨷ {extension}</h5>
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

export default CircuitsDetailsCard;
