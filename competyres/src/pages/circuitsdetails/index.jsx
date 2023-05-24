import { useContext, useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { useParams } from "react-router-dom";
import CircuitsDetails from "../../components/CircuitsDetails";
import Session from "../../context/session-context";
import CSS from "./CircuitsDetails.module.css";

const CircuitDetails = () => {
  const params = useParams();
  const { id } = params;
  const { sendRequest } = useHttp();
  const [circuito, setCircuito] = useState([]);
  const { userData } = useContext(Session);
  const { isLogged } = userData;

  useEffect(() => {
    // if (onlyOnce) {
    const config = {
      url: "/circuito/" + id,
      method: "GET",
    };

    sendRequest(config).then((respuesta) => {
      setCircuito(respuesta);
    });

    //onlyOnce = false;
    //}
  }, [sendRequest, id]);

  return (
    <div className={CSS.page}>
      <CircuitsDetails circuit={circuito} isLogged={isLogged} />
    </div>
  );
};

export default CircuitDetails;
