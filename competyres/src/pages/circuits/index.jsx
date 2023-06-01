import CircuitsCard from "../../components/CircuitsCard";
import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { useNavigate } from "react-router-dom";
import CSS from "./Circuits.module.css";
import { Button, Form } from "react-bootstrap";
//let onlyOnce = true;

function Circuit() {
    const { sendRequest } = useHttp();
    const [circuitos, setCircuitos] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [arryCircuitos, setArrayCircuitos] = useState([]);

    const navigate = useNavigate();

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
            setArrayCircuitos(respuesta);
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
        <div>
            <div className={CSS.hr}>
                <div className={CSS.buscador}>
                    <Form.Control
                        placeholder="Buscar por nombre de circuito o ubicación"
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
                {circuitos.map((circuito) => (
                    <CircuitsCard
                        circuit={circuito}
                        onClick={onClickHandler}
                    ></CircuitsCard>
                ))}
            </div>
        </div>
    );
}

export default Circuit;
