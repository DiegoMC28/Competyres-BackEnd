import CarsCard from "../../components/CarsCard";
import useHttp from "../../hooks/use-http";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CSS from "./Cars.module.css";
import { set } from "mongoose";
//let onlyOnce = true;

function Coches() {
    const { sendRequest } = useHttp();
    const [coches, setCoches] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [arrayCoches, setArrayCoches] = useState([]);
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
            setArrayCoches(respuesta);
        });

        //onlyOnce = false;
        //}
    }, [sendRequest]);

    const onChangeHandler = (event) => {
        setFiltro(event.target.value);
    };

    const onClick = () => {
        setCoches(arrayCoches.filter((car) => car.modelo.includes(filtro)));
    };

    return (
        <div>
            <input onChange={onChangeHandler}></input>
            <button onClick={onClick}>Buscar</button>
            <div className={CSS.page}>
                {coches.map((coche) => (
                    <CarsCard car={coche} onClick={onClickHandler}></CarsCard>
                ))}
            </div>
        </div>
    );
}

export default Coches;
