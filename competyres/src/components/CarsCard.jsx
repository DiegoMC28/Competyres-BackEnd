import Card from "react-bootstrap/Card";
import CSS from "./Card.module.css";
import coronaLaurel from "../resources/laurels-icon.webp";

function CarsCard(props) {
    const {
        escuderia,
        modelo,
        categoria,
        ultimoAñoDeCompeticion,
        imagen,
        precio,
        pais,
    } = props.car ?? {};
    const { onClick } = props;
    const onClickHandler = () => {
        onClick(props.car);
    };
    const bandera =
        "https://www.countryflagicons.com/SHINY/32/" + pais + ".png";
    return (
        <Card onClick={onClickHandler} className={CSS.cardStyle}>
            <Card.Body>
                {props.car ? (
                    <>
                        <Card.Title className={`${CSS.m10} ${CSS.truncate}`}>
                            <img src={bandera} />
                            {escuderia + " " + modelo}
                        </Card.Title>
                        <Card.Subtitle className={CSS.m10}>
                            <img width={35} height={35} src={coronaLaurel} />
                            {categoria}
                        </Card.Subtitle>
                        <div className={CSS.imgContainer}>
                            <Card.Img variant="top" src={imagen} />
                        </div>

                        <div className={`${CSS.m10} text-center h1`}>
                            {precio}€
                        </div>
                    </>
                ) : (
                    <>
                        <h1>Elije Coche</h1>
                    </>
                )}
            </Card.Body>
        </Card>
    );
}

export default CarsCard;
