import Card from "react-bootstrap/Card";
import CSS from "./Card.module.css";
import pingRed from "../resources/location-icon-red.png";
import Logo from "../resources/CompetyresSinFondo.png";

function CircuitsCard(props) {
    const { nombre, ubicacion, imagen, precioPorVuelta, pais } =
        props.circuit ?? {};
    const { onClick } = props;
    const onClickHandler = () => {
        onClick(props.circuit);
    };
    const bandera =
        "https://www.countryflagicons.com/SHINY/32/" + pais + ".png";
    return (
        <Card onClick={onClickHandler} className={CSS.cardStyle}>
            <Card.Body>
                {props.circuit ? (
                    <>
                        <Card.Title className={`${CSS.m10} ${CSS.truncate}`}>
                            <img src={bandera} alt="" />
                            {nombre}
                        </Card.Title>
                        <div className={CSS.imgContainer}>
                            <Card.Img alt={nombre} variant="top" src={imagen} />
                        </div>
                        <Card.Subtitle className={`${CSS.m10} ${CSS.truncate}`}>
                            <img alt="" width={30} height={30} src={pingRed} />
                            {ubicacion}
                        </Card.Subtitle>
                        <Card.Subtitle className={CSS.m10}>
                            {precioPorVuelta + "€/Vuelta "}
                        </Card.Subtitle>
                    </>
                ) : (
                    <>
                        <h1>Elije circuito</h1>
                        <img
                            alt="Logo de la app"
                            src={Logo}
                            width={200}
                            height={200}
                            style={{ marginTop: "80px" }}
                        />
                    </>
                )}
            </Card.Body>
        </Card>
    );
}

export default CircuitsCard;
