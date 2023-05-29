import NoticeCard from "../components/NoticeCard";
import logo from "../resources/logo.svg";
import useHttp from "../hooks/use-http";
import React, { useContext, useEffect, useState } from "react";
import Session from "../context/session-context";
import { Link } from "react-router-dom";
import CSS from "./index.module.css";
//let onlyOnce = true;

function Main() {
  const { sendRequest } = useHttp();
  const [noticias, setNoticias] = useState([]);
  const { userData } = useContext(Session);
  const { isLogged } = userData;

  useEffect(() => {
    // if (onlyOnce) {
    const config = {
      url: "/noticias",
      method: "GET",
    };

    sendRequest(config).then((respuesta) => {
      setNoticias(respuesta);
    });

    //onlyOnce = false;
    //}
  }, [sendRequest]);

  return (
    <div className="d-flex justify-content-center flex-column">
      <h1>Experiencia de conducción competitiva</h1>
      <hr />

      {!isLogged && (
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
          <hr />
        </>
      )}
      <div className={CSS.page}>
        {noticias.map((noticia) => (
          <NoticeCard
            key={noticia._id}
            title={noticia.titulo}
            body={noticia.cuerpo}
            image={logo}
            date={noticia.fechaPublicacion}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
