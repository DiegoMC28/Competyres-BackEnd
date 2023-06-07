import CircuitsCard from "../../components/CircuitsCard";
import React, { useContext, useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { useNavigate } from "react-router-dom";
import CSS from "./Circuits.module.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import DateComponent from "../../components/BookingDate";
import Session from "../../context/session-context";

function Circuit() {
    const { sendRequest } = useHttp();
    const [circuitos, setCircuitos] = useState([]);
    const [filtro, setFiltro] = useState("");
    const navigate = useNavigate();
    const { userData } = useContext(Session);
    const { isLogged } = userData;

    const onClickHandler = (circuit) => {
        navigate(circuit._id);
    };

    useEffect(() => {
        // if (onlyOnce) {
        const config = {
            url: "/circuitos",
            method: "GET",
        };

        sendRequest(config).then((respuesta) => {
            setCircuitos(respuesta);
        });

        //onlyOnce = false;
        //}
    }, [sendRequest]);

    const onChangeHandler = (event) => {
        setFiltro(event.target.value);
    };

    const onClick = async () => {
        const config = {
            url: "/buscar/circuitos?filtro=" + filtro,
            method: "GET",
        };

        const response = await sendRequest(config);
        setCircuitos(response);
    };

    return (
        <div className={CSS.page}>
            <div className={CSS.filtro}>
                {isLogged && <DateComponent />}

                <div className={CSS.buscador}>
                    <InputGroup>
                        <Form.Control
                            placeholder="Buscar por circuito o ubicacion"
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
                {circuitos.map((circuito) => (
                    <CircuitsCard
                        key={circuito._id}
                        circuit={circuito}
                        onClick={onClickHandler}
                    ></CircuitsCard>
                ))}
            </div>
        </div>
    );
}

export default Circuit;
