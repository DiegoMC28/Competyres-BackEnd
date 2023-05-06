import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tarjeta from "../Tarjeta/Tarjeta";
import logo from "../../logo.svg";
import useHttp from "../../hooks/use-http";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

function PaginaPrincipal() {
  const { isLoading, error, sendRequest: sendRequest } = useHttp();
  const [noticias, setNoticias] = useState([]);

  const noticiasHandler = async () => {
    const config = {
      url: "/noticias",
      method: "GET",
    };

    const respuesta = await sendRequest(config);

    setNoticias(respuesta);
    console.log(respuesta);
  };

  return (
    <Container>
      
      {noticias.map((noticia) => (
        <Row>
          <Col></Col>
          <Col>
            <Tarjeta
              titulo={noticia.titulo}
              cuerpo={noticia.cuerpo}
              imagen={logo}
            ></Tarjeta>{" "}
          </Col>
          <Col></Col>
        </Row>
      ))}
      
      <div>
        <Button onClick={noticiasHandler} variant="success">
          {isLoading ? "Enviando..." : "Submit"}
        </Button>
      </div>
    </Container>
  );
}

export default PaginaPrincipal;
