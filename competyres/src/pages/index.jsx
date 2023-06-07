import AssessmentCard from "../components/AssessmentCard";

import useHttp from "../hooks/use-http";
import React, { useContext, useEffect, useState } from "react";
import Session from "../context/session-context";
import { Link } from "react-router-dom";
import CSS from "./index.module.css";
import Assessment from "../components/Assesment";
//let onlyOnce = true;

function Main() {
    const { sendRequest } = useHttp();
    const [valoraciones, setValoraciones] = useState([]);
    const { userData } = useContext(Session);
    const { isLogged, token } = userData;

    useEffect(() => {
        // if (onlyOnce) {
        const config = {
            url: "/valoraciones",
            method: "GET",
            headers: { Authorization: token },
        };

        sendRequest(config).then((respuesta) => {
            setValoraciones(respuesta);
        });

        //onlyOnce = false;
        //}
    }, [sendRequest, token]);

    const onSubmitHandler = () => {
        const config = {
            url: "/valoraciones",
            method: "GET",
            headers: { Authorization: token },
        };

        sendRequest(config).then((respuesta) => {
            setValoraciones(respuesta);
        });
    };

    return (
        <div className={CSS.letras}>
            <div className={CSS.titulo}>
                <h1>Experiencia de conducción profesional en circuito</h1>
            </div>

            <div className={CSS.Assessment}>
                {!isLogged ? (
                    <>
                        <p>
                            <Link className={CSS.enlace} to={"/singup"}>
                                Registrate
                            </Link>{" "}
                            o{" "}
                            <Link className={CSS.enlace} to={"/login"}>
                                Inicia sesion
                            </Link>{" "}
                            para acceder al servicio de reservas
                        </p>
                    </>
                ) : (
                    <>
                        <Assessment onSubmit={onSubmitHandler}></Assessment>
                    </>
                )}
            </div>

            <div className={CSS.page}>
                {valoraciones.map((valoracion) => (
                    <AssessmentCard
                        key={valoracion._id}
                        title={
                            valoracion.usuario.nombre +
                            " " +
                            valoracion.usuario.apellido
                        }
                        puntuacion={valoracion.puntuacion}
                        body={valoracion.comentario}
                        date={valoracion.fechaPublicacion}
                    />
                ))}
            </div>
        </div>
    );
}

export default Main;
