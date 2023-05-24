import { Button } from "react-bootstrap";
import CSS from "./CircuitsDetails.module.css";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function CircuitsDetailsCard(props) {
  const { circuit, isLogged } = props;
  const { nombre, ubicacion, extension, descripcion, capacidadCoches, imagen } =
    circuit;
  const [open, setOpen] = useState(false);

  const onViewHandler = () => {
    setOpen(true);
  };

  const onCloseHandler = () => {
    setOpen(false);
  };

  return (
    <div className={CSS.body}>
      <img src={imagen} alt={nombre} onClick={onViewHandler} />
      <Lightbox open={open} close={onCloseHandler} slides={[{ src: imagen }]} />
      <style jsx global>{`
        .yarl__slide_image {
          background-color: rgba(255, 255, 255);
        }
      `}</style>
      <div className={CSS.texto}>
        <h1>{nombre}</h1>
        <hr></hr>
        <h5>⨷ Ubicacion: {ubicacion}</h5>
        <h5>⨷ Extension: {extension}</h5>
        <h5>⨷ Reservas disponibles: {capacidadCoches}</h5>
        <hr />
        <h4>Descripcion</h4>
        <p>{descripcion}</p>
        {isLogged && capacidadCoches !== 0 && (
          <Button className={CSS.button} variant="success">
            Añadir a la reserva
          </Button>
        )}
      </div>
    </div>
  );
}

export default CircuitsDetailsCard;
