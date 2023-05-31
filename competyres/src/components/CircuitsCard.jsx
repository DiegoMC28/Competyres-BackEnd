import Card from "react-bootstrap/Card";
import CSS from "./Card.module.css";

function CircuitsCard(props) {
    const { nombre, ubicacion, imagen, precioPorVuelta } = props.circuit ?? {};
    const { onClick } = props;
    const onClickHandler = () => {
        onClick(props.circuit);
    };

    return (
        <Card onClick={onClickHandler} className={CSS.cardStyle}>
            <Card.Body>
                {props.circuit ? (
                    <>
                        <Card.Header>
                            <Card.Img variant="top" src={imagen} />
                        </Card.Header>
                        <Card.Title>
                            {/*Poner campo pais en el backend para ponerlo en la ruta de la imagen: ES, UK...etc*/}
                            <img src="https://www.countryflagicons.com/SHINY/32/ES.png" />
                            {nombre}
                        </Card.Title>

                        <Card.Subtitle>
                            {"Ubicacion: " + ubicacion}
                        </Card.Subtitle>
                        <Card.Subtitle>
                            {"Precio por vuelta: " + precioPorVuelta}
                        </Card.Subtitle>
                    </>
                ) : (
                    <>
                        <h1>Elije circuito</h1>
                    </>
                )}
            </Card.Body>
        </Card>
    );
}

export default CircuitsCard;
