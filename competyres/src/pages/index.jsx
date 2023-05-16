import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NoticeCard from "../components/noticeCard/NoticeCard";
import logo from "../resources/logo.svg";
import useHttp from "../hooks/use-http";
import React, { useEffect, useState } from "react";
//let onlyOnce = true;

function Main() {
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
      {/* <div className="d-flex justify-content-center ">
        <div>A</div>
        <div>B</div>
      </div> */}
      {noticias.map((noticia) => (
        <Row key={noticia._id}>
          <Col></Col>
          <Col>
            <NoticeCard
              title={noticia.titulo}
              body={noticia.cuerpo}
              image={logo}
              date={noticia.fechaPublicacion}
            ></NoticeCard>{" "}
          </Col>
          <Col></Col>
        </Row>
      ))}
    </Container>
  );
}

export default Main;
