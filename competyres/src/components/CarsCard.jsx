import Card from "react-bootstrap/Card";
import CSS from "./Card.module.css";
import Logo from "../resources/LogoCabecera1.png"
import coronaLaurel from "../resources/laurels-icon.webp";

function CarsCard(props) {
    const {
        escuderia,
        modelo,
        categoria,
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
                            <img src={bandera} alt=""/>
                            {escuderia + " " + modelo}
                        </Card.Title>
                        <Card.Subtitle className={CSS.m10}>
                            <img alt="" width={35} height={35} src={coronaLaurel} />
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
                        <img alt="Logo de la app" src={Logo} width={260} height={160} style={{marginTop:"80px"}}/>
                    </>
                )}
            </Card.Body>
        </Card>
    );
}

export default CarsCard;
