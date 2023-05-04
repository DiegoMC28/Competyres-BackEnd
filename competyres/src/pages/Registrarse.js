import Container from 'react-bootstrap/esm/Container';
import useInput from '../hooks/use-input';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import useHttp from '../hooks/use-http';
import '../App.css';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');
const isValidContraseña = (value) => value.trim().length > 8;

const Resgistrarse = (props) => {
    const { isLoading, error, sendRequest: enviarNuevoUsuario } = useHttp();

    const usuarioHandler = async () => {
        const config = {
            url: 'http://localhost:3000/usuario',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: { nombre: valorNombre, apellido: valorPrimerApellido, edad: valorEdad, email: valorEmail, contrasena: valorContraseña }
        };

        enviarNuevoUsuario(config, respuesta => console.log(respuesta));
    };

    const {
        value: valorNombre,
        isValid: nombreEsValido,
        hasError: ErrorEnNombre,
        valueChangeHandler: nombreChangeHandler,
        inputBlurHandler: nombreBlurHandler,
        reset: resetNombre,
    } = useInput(isNotEmpty);
    const {
        value: valorPrimerApellido,
        isValid: primerApellidoEsValido,
        hasError: ErrorEnPrimerApellido,
        valueChangeHandler: primerApellidoChangeHandler,
        inputBlurHandler: primerApellidoBlurHandler,
        reset: resetPrimerApellido,
    } = useInput(isNotEmpty);
    const {
        value: valorEdad,
        isValid: EdadEsValida,
        hasError: ErrorEnEdad,
        valueChangeHandler: edadChangeHandler,
        inputBlurHandler: edadBlurHandler,
        reset: resetEdad,
    } = useInput(isNotEmpty);
    const {
        value: valorEmail,
        isValid: emailEsValido,
        hasError: errorEnEmail,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);
    const {
        value: valorContraseña,
        isValid: contraseñaEsValida,
        hasError: errorEnContraseña,
        valueChangeHandler: contraseñaChangeHandler,
        inputBlurHandler: contraseñaBlurHandler,
        reset: resetContraseña,
    } = useInput(isValidContraseña);

    let formIsValid = false;

    if (nombreEsValido && primerApellidoEsValido && EdadEsValida && emailEsValido && contraseñaEsValida) {
        formIsValid = true;
    }

    const submitHandler = event => {
        //event.preventDefault();

        if (!formIsValid) {
            return;
        }
        usuarioHandler();
        resetNombre();
        resetPrimerApellido();
        resetEdad();
        resetEmail();
        resetContraseña();
    };


    return (
        <Form >
            <br />
            <Card style={{ width: '50rem' }}>
                <Card.Body>
                    <Card.Text>
                        <Container>
                            <Row>
                                <Col>

                                    <div>
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            type='text'
                                            id='nombre'
                                            value={valorNombre}
                                            onChange={nombreChangeHandler}
                                            onBlur={nombreBlurHandler}
                                        />
                                        <br />
                                        {ErrorEnNombre && <Alert variant="danger" >Por favor introduzca un nombre.</Alert>}
                                    </div>
                                </Col>
                                <Col>

                                    <div>
                                        <Form.Label>Primer apellido</Form.Label>
                                        <Form.Control
                                            type='text'
                                            id='apellido'
                                            value={valorPrimerApellido}
                                            onChange={primerApellidoChangeHandler}
                                            onBlur={primerApellidoBlurHandler}
                                        />
                                        <br />
                                        {ErrorEnPrimerApellido && <Alert variant="danger" >Por favor introduzca el primer apellido</Alert >}
                                    </div></Col>
                                <Col>
                                    <div>
                                        <Form.Label htmlFor='edad'>Edad</Form.Label>
                                        <Form.Control
                                            type='number'
                                            id='edad'
                                            value={valorEdad}
                                            onChange={edadChangeHandler}
                                            onBlur={edadBlurHandler}
                                        />
                                        <br />
                                        {ErrorEnEdad && <Alert variant="danger" >Por favor introduzca la edad</Alert >}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col><div >
                                    <Form.Label>E-Mail</Form.Label>
                                    <Form.Control
                                        type='text'
                                        id='email'
                                        value={valorEmail}
                                        onChange={emailChangeHandler}
                                        onBlur={emailBlurHandler}
                                    />
                                    <br />
                                    {errorEnEmail && <Alert variant="danger">Porfavor introduzca un email valido</Alert>}
                                </div>
                                </Col>
                                <Col>
                                    <div >
                                        <Form.Label >Contraseña</Form.Label>
                                        <Form.Control
                                            type='password'
                                            id='contraseña'
                                            value={valorContraseña}
                                            onChange={contraseñaChangeHandler}
                                            onBlur={contraseñaBlurHandler}
                                        />
                                        <br />
                                        {errorEnContraseña && <Alert variant="danger" >Porfavor introduzca una contraseña valida</Alert>}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col>
                                    <div>
                                        <Button onClick={submitHandler} variant="success" disabled={!formIsValid}>{isLoading ? 'Enviando...' : 'Submit'}</Button>
                                    </div>
                                    {error && <Alert variant="danger">{error}</Alert>}</Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </Form>

    );
};

export default Resgistrarse;