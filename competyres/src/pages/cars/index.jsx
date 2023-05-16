import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarsCard from "../../components/carsCard/CarsCard";
import logo from "../../resources/logo.svg";
import useHttp from "../../hooks/use-http";
import { useState, useEffect } from "react";
//let onlyOnce = true;

function Coches() {
  const { sendRequest } = useHttp();
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
              <CarsCard
                team={coche.escuderia}
                model={coche.modelo}
                category={coche.categoria}
                lastYearOfCompetition={coche.ultimoAñoDeCompeticion}
                image={logo}
              ></CarsCard>{" "}
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
}

export default Coches;
