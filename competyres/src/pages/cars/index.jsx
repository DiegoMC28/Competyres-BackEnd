import CarsCard from "../../components/CarsCard";
import useHttp from "../../hooks/use-http";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CSS from "./Cars.module.css";
//let onlyOnce = true;

function Coches() {
    const { sendRequest } = useHttp();
    const [coches, setCoches] = useState([]);
    const [filtro, setFiltro] = useState("");
    // const [filtro, setFiltro] = useState("");
    const navigate = useNavigate();

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
        <div>
            <div className={CSS.hr}>
                <div className={CSS.buscador}>
                    <h1>Buscador</h1>
                </div>
                <hr />
                <div className={CSS.buscador}>
                    <Form.Control
                        placeholder="Audi A5..."
                        type="text"
                        id="buscador"
                        onChange={onChangeHandler}
                    />

                    <Button onClick={onClick} variant="success">
                        Buscar
                    </Button>
                </div>
                <hr />
            </div>
            <div className={CSS.page}>
                {coches.map((coche) => (
                    <CarsCard car={coche} onClick={onClickHandler}></CarsCard>
                ))}
            </div>
        </div>
    );
}

export default Coches;
