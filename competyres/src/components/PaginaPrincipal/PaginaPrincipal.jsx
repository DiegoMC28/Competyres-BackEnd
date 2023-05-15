import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tarjeta from "../Tarjeta/Tarjeta";
import logo from "../../logo.svg";
import useHttp from "../../hooks/use-http";
import React, {useEffect, useState } from "react";
//let onlyOnce = true;

function PaginaPrincipal() {
  const { sendRequest } = useHttp();
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
   // if (onlyOnce) {
      const config = {
        url: "/noticias",
        method: "GET",
      };

      sendRequest(config).then((respuesta) => {
        setNoticias(respuesta);
      });

      //onlyOnce = false;
    //}
  }, [sendRequest]);

  return (
    <Container>
      {noticias.map((noticia) => (
        <Row key={noticia._id}>
          <Col></Col>
          <Col>
            <Tarjeta
              tamañoTarjeta="50rem"
              titulo={noticia.titulo}
              cuerpo={noticia.cuerpo}
              imagen={logo}
            ></Tarjeta>{" "}
          </Col>
          <Col></Col>
        </Row>
      ))}
    </Container>
  );
}

export default PaginaPrincipal;
