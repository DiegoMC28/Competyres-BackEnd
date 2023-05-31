import { Button } from "react-bootstrap";
import CSS from "./CarsDetails.module.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import useBooking from "../hooks/useBooking";
import { useNavigate } from "react-router-dom";

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

  const onCloseHandler = () => {
    setOpen(false);
  };
  const available = new Date(disponible ?? new Date()) <= new Date();

  return (
    <div className={CSS.body}>
      <img
        src={imagen}
        alt={escuderia + " " + modelo}
        onClick={onViewHandler}
      />
      <Lightbox open={open} close={onCloseHandler} slides={[{ src: imagen }]} />
      <style jsx global>{`
        .yarl__slide_image {
          background-color: rgba(255, 255, 255);
        }
      `}</style>
      <div className={CSS.texto}>
        <h1>
          {escuderia} {modelo}
        </h1>
        <hr></hr>
        <h5>⨷ Categoria: {categoria}</h5>
        <h5>⨷ Ultimo año de competicion: {ultimoAñoDeCompeticion}</h5>
        <h5>⨷ Precio: {precio}€</h5>
        <h5>⨷ Disponibilidad: {available ? "Disponible" : "No disponible"}</h5>
        <hr />
        <h4>Descripcion</h4>
        <p>{descripcion}</p>
        {isLogged && available && (
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
  );
}

export default CarsDetails;
