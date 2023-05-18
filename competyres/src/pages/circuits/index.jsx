import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CircuitsCard from "../../components/CircuitsCard";
import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { useNavigate } from "react-router-dom";
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
    <Container>
      <Row>
        {circuitos.map((circuito) => (
          <Col>
            <CircuitsCard
              circuit={circuito}
              detailsHandler={detailsHandler}
            ></CircuitsCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Circuit;
