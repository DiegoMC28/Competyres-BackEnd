import { useContext, useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CircuitsDetailsCard from "../../components/CircuitsDetailsCard";
import Session from "../../context/session-context";

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
    <Container>
      <Row>
        <Col>
          <CircuitsDetailsCard circuit={circuito} isLogged={isLogged} />
        </Col>
      </Row>
    </Container>
  );
};

export default CircuitDetails;
