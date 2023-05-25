import CarsCard from "../../components/CarsCard";
import useHttp from "../../hooks/use-http";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CSS from "./Cars.module.css";
//let onlyOnce = true;

function Coches() {
  const { sendRequest } = useHttp();
  const [coches, setCoches] = useState([]);
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

  // const onKeyDownHandler = (e) => {
  //   if (e.keyCode === 13) {

  //     setFiltro(e.target.value.toString());

  //     console.log(filtro)
  //     setCoches(coches.filter((coche) => coche.modelo === filtro.toString()));

  //   }
  // };

  return (
    <div>
      {/* <input onKeyDown={onKeyDownHandler}></input> */}
      <div className={CSS.page}>
        {coches.map((coche) => (
          <CarsCard car={coche} onClick={onClickHandler}></CarsCard>
        ))}
      </div>
    </div>
  );
}

export default Coches;
