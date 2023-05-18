import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarsCard from "../../components/CarsCard";
import useHttp from "../../hooks/use-http";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    <Container>
      <Row>
        {coches.map((coche) => (
          <>
            <Col>
              <CarsCard
                car={coche}
                detailsHandler={detailsHandler}
              ></CarsCard>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
}

export default Coches;
