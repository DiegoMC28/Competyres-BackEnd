import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tarjeta from '../Tarjeta/Tarjeta';
import logo from '../../logo.svg';
import useHttp from '../../hooks/use-http';
import Button from 'react-bootstrap/Button';

function PaginaPrincipal() {
    const { isLoading, error, sendRequest: recogerNoticias } = useHttp();
    const arrayNoticias = [];

    const crearNoticia = (id, titulo, cuerpo, fechaPublicacion) => {
        arrayNoticias = [{ id: id, titulo: titulo, cuerpo: cuerpo, fechaPublicacion: fechaPublicacion }]
    }

    const noticiasHandler = async (id, titulo, cuerpo, fechaPublicacion) => {
        recogerNoticias(
            {
                url: 'http://localhost:3000/noticias',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {}
            },
            crearNoticia.bind(id, titulo, cuerpo, fechaPublicacion)

        );

        console.log(arrayNoticias[0]);
    };




    return (
        <Container >
            <br />
            <Row>
                <Col></Col>
                <Col><Tarjeta titulo="Titulo" cuerpo="Cuerpo de la noticia" imagen={logo}></Tarjeta> </Col>
                <Col></Col>
            </Row>
            <br />
            <Row>
                <Col></Col>
                <Col><Tarjeta titulo="Titulo" cuerpo="Cuerpo de la noticia" imagen={logo}></Tarjeta></Col>
                <Col></Col>
            </Row>
            <br />
            <div>
                <Button  onClick={noticiasHandler} variant="success" >{isLoading ? 'Enviando...' : 'Submit'}</Button>
            </div>
        </Container>
    );
}

export default PaginaPrincipal;