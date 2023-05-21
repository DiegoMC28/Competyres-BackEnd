import CarsCard from "../../components/CarsCard";
import useHttp from "../../hooks/use-http";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CSS from "./Cars.module.css";
//let onlyOnce = true;

function Coches() {
  const { sendRequest } = useHttp();
  const [coches, setCoches] = useState([]);
  const navigate = useNavigate();

  const detailsHandler = (id) => {
    navigate(id);
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

  return (
    <div className={CSS.page}>
      {coches.map((coche) => (
        <CarsCard car={coche} detailsHandler={detailsHandler}></CarsCard>
      ))}
    </div>
  );
}

export default Coches;
