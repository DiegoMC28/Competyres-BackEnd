import CircuitsCard from "../../components/CircuitsCard";
import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { useNavigate } from "react-router-dom";
import CSS from "./Circuits.module.css";
//let onlyOnce = true;

function Circuit() {
  const { sendRequest } = useHttp();
  const [circuitos, setCircuitos] = useState([]);

  const navigate = useNavigate();

  const detailsHandler = (id) => {
    navigate(id);
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

  return (
    <div className={CSS.page}>
      {circuitos.map((circuito) => (
        <CircuitsCard
          circuit={circuito}
          detailsHandler={detailsHandler}
        ></CircuitsCard>
      ))}
    </div>
  );
}

export default Circuit;
