import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tarjeta from '../Tarjeta/Tarjeta';


function CuerpoPagina() {
    return (
        <Container >
            <br />
            <Row>
                <Col><Tarjeta></Tarjeta></Col>
                <Col><Tarjeta></Tarjeta></Col>
                <Col><Tarjeta></Tarjeta></Col>
            </Row>
            <br />
            <Row>
                <Col><Tarjeta></Tarjeta></Col>
                <Col><Tarjeta></Tarjeta></Col>
                <Col><Tarjeta></Tarjeta></Col>
            </Row>
            <br />
        </Container>
    );
}

export default CuerpoPagina;