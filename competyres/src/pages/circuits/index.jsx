import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CircuitsCard from "../../components/circuitsCard/CircuitsCard";
import logo from "../../resources/logo.svg";
import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
//let onlyOnce = true;

function Circuit() {
  const { sendRequest } = useHttp();
  const [circuitos, setCircuitos] = useState([]);

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
    <Container>
      <Row>
        {circuitos.map((circuito) => (
          <Col>
            <CircuitsCard
              name={circuito.nombre}
              location={circuito.ubicacion}
              image={logo}
            ></CircuitsCard>{" "}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Circuit;
