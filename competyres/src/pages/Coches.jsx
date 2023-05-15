import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tarjeta from "../components/Tarjeta/Tarjeta";
import logo from "../logo.svg";
import useHttp from "../hooks/use-http";
import { useState, useEffect } from "react";
//let onlyOnce = true;

function Coches() {
  const {sendRequest} = useHttp();
  const [coches, setCoches] = useState([]);

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
    <Container>
      <Row>
      {coches.map((coche) => (
        <>
          <Col>
            <Tarjeta
            tamañoTarjeta="18rem"
              titulo={coche.escuderia + " " + coche.modelo}
              cuerpo={coche.categoria+ " " + coche.ultimoAñoDeCompeticion + " " +coche.precio + " || " + coche.descripcion}
              imagen={logo}
            ></Tarjeta>{" "}
          </Col>
          </>
      ))}
      </Row>
    </Container>
  );
}

export default Coches;
