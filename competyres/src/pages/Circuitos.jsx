import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tarjeta from "../components/Tarjeta/Tarjeta";
import logo from "../logo.svg";
import React, {useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
//let onlyOnce = true;

function Circuitos() {

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
      {circuitos.map((circuito) => (
        <Row key={circuito._id}>
          <Col></Col>
          <Col>
            <Tarjeta
              tamañoTarjeta="50rem"
              titulo={circuito.nombre}
              cuerpo={circuito.descripcion}
              imagen={logo}
            ></Tarjeta>{" "}
          </Col>
          <Col></Col>
        </Row>
      ))}
    </Container>
   
    );
  }
  
  export default Circuitos;