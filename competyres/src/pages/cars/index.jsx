import CarsCard from "../../components/CarsCard";
import useHttp from "../../hooks/use-http";
import { useState, useEffect, useContext } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CSS from "./Cars.module.css";
import DateComponent from "../../components/BookingDate";
import Session from "../../context/session-context";
//let onlyOnce = true;

function Coches() {
    const { sendRequest } = useHttp();
    const [coches, setCoches] = useState([]);
    const [filtro, setFiltro] = useState("");
    // const [filtro, setFiltro] = useState("");
    const navigate = useNavigate();
    const { userData } = useContext(Session);
    const { isLogged } = userData;

    const onClickHandler = (car) => {
        navigate(car._id);
    };
    useEffect(() => {
        // if (onlyOnce) {
        const config = {
            url: "/coches",
            method: "GET",
        };

        sendRequest(config).then((respuesta) => {
            setCoches(respuesta);
        });

        //onlyOnce = false;
        //}
    }, [sendRequest]);

    const onChangeHandler = (event) => {
        setFiltro(event.target.value);
    };

    const onClick = async () => {
        const config = {
            url: "/buscar/coches?filtro=" + filtro,
            method: "GET",
        };

        const response = await sendRequest(config);
        setCoches(response);
    };

    return (
        <div className={CSS.page}>
            <div className={CSS.filtro}>
                {isLogged && <DateComponent />}

                <div className={CSS.buscador}>
                    <InputGroup>
                        <Form.Control
                            placeholder="Buscar por modelo, escuderia o categoria"
                            type="text"
                            id="buscador"
                            onChange={onChangeHandler}
                        />

                        <Button onClick={onClick} variant="light">
                            Buscar
                        </Button>
                    </InputGroup>
                </div>
            </div>
            <div className={CSS.cards}>
                {coches.map((coche) => (
                    <CarsCard
                        key={coche._id}
                        car={coche}
                        onClick={onClickHandler}
                    ></CarsCard>
                ))}
            </div>
        </div>
    );
}

export default Coches;
