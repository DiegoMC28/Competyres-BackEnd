import { useContext, useEffect, useState } from "react";
import CarsDetailsCard from "../../components/CarsDetailsCard";
import useHttp from "../../hooks/use-http";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Session from "../../context/session-context";

const CarsDetails = () => {
  const params = useParams();
  const { id } = params;
  const { sendRequest } = useHttp();
  const [coche, setCoche] = useState([]);
  const { userData } = useContext(Session);
  const { isLogged } = userData;

  useEffect(() => {
    // if (onlyOnce) {
    const config = {
      url: "/coche/" + id,
      method: "GET",
    };

    sendRequest(config).then((respuesta) => {
      setCoche(respuesta);
    });

    //onlyOnce = false;
    //}
  }, [sendRequest, id]);

  return (
    <Container>
      <Row>
        <Col>
          <CarsDetailsCard car={coche} isLogged={isLogged} />
        </Col>
      </Row>
    </Container>
  );
};

export default CarsDetails;
