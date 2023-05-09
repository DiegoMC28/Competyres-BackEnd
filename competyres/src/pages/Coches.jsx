import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tarjeta from "../components/Tarjeta/Tarjeta";
import logo from "../logo.svg";
import useHttp from "../hooks/use-http";
import { useState } from "react";
import Button from "react-bootstrap/Button";


function Coches() {
  const { isLoading, sendRequest} = useHttp();
  const [coches, setCoches] = useState([]);

  const cochesHandler = async () => {
    const config = {
      url: "/coches",
      method: "GET",
    };

    const respuesta = await sendRequest(config);

    setCoches(respuesta);
    console.log(respuesta);
  };

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
      <div>
        <Button onClick={cochesHandler} variant="success">
          {isLoading ? "Enviando..." : "Submit"}
        </Button>
      </div>
    </Container>
  );
}

export default Coches;
