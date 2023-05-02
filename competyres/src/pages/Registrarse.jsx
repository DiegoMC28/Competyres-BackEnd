import Container from 'react-bootstrap/esm/Container';
import useInput from '../hooks/use-input';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import React, { useState, useEffect, useCallback } from 'react';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');
const isValidContraseña = (value) => value.trim().length > 8;

const Resgistrarse = (props) => {
    const [usuarios, setUsuarios] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchMoviesHandler = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://react-http-6b4a6.firebaseio.com/movies.json');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const data = await response.json();
  
        const loadedMovies = [];
  
        for (const key in data) {
          loadedMovies.push({
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          });
        }
  
        setUsuarios(loadedMovies);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }, []);
  
    useEffect(() => {
      fetchMoviesHandler();
    }, [fetchMoviesHandler]);
  
    async function añadirUsuario(usuario) {
      const response = await fetch('http://localhost:3000/usuario', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
    }
  
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
        value: valorSegundoApellido,
        isValid: segundoApellidoEsValido,
        hasError: ErrorEnSegundoApellido,
        valueChangeHandler: segundoApellidoChangeHandler,
        inputBlurHandler: segundoApellidoBlurHandler,
        reset: resetSegundoApellido,
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

    if (nombreEsValido && primerApellidoEsValido && segundoApellidoEsValido && emailEsValido && contraseñaEsValida) {
        formIsValid = true;
    }

    const submitHandler = event => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        const usuario = {
            nombre: valorNombre,
            apellido: valorPrimerApellido,
            edad: 30,
            email: valorEmail,
            contrasena: valorContraseña
        }

        añadirUsuario(usuario);

        resetNombre();
        resetPrimerApellido();
        resetSegundoApellido();
        resetEmail();
        resetContraseña();
    };


    return (

        <Form onSubmit={submitHandler}>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <br />
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <div className='control-group'>
                                        <div>
                                            <Form.Label htmlFor='name'>Nombre</Form.Label>
                                            <Form.Control
                                                type='text'
                                                id='name'
                                                value={valorNombre}
                                                onChange={nombreChangeHandler}
                                                onBlur={nombreBlurHandler}
                                            />
                                            <br />
                                            {ErrorEnNombre && <Alert variant="danger" >Por favor introduzca un nombre.</Alert>}
                                        </div>
                                        <br />
                                        <div>
                                            <Form.Label htmlFor='name'>Primer apellido</Form.Label>
                                            <Form.Control
                                                type='text'
                                                id='name'
                                                value={valorPrimerApellido}
                                                onChange={primerApellidoChangeHandler}
                                                onBlur={primerApellidoBlurHandler}
                                            />
                                            <br />
                                            {ErrorEnPrimerApellido && <Alert variant="danger" >Por favor introduzca el primer apellido</Alert >}
                                        </div>
                                        <br />
                                        <div>
                                            <Form.Label htmlFor='name'>Segundo apellido</Form.Label>
                                            <Form.Control
                                                type='text'
                                                id='name'
                                                value={valorSegundoApellido}
                                                onChange={segundoApellidoChangeHandler}
                                                onBlur={segundoApellidoBlurHandler}
                                            />
                                            <br />
                                            {ErrorEnSegundoApellido && <Alert variant="danger" >Por favor introduzca el segundo apellido</Alert >}
                                        </div>
                                    </div>
                                    <br />
                                    <div >
                                        <Form.Label htmlFor='name'>E-Mail</Form.Label>
                                        <Form.Control
                                            type='text'
                                            id='name'
                                            value={valorEmail}
                                            onChange={emailChangeHandler}
                                            onBlur={emailBlurHandler}
                                        />
                                        <br />
                                        {errorEnEmail && <Alert variant="danger">Porfavor introduzca un email valido</Alert>}
                                    </div>
                                    <br />
                                    <div >
                                        <Form.Label htmlFor='name'>Contraseña</Form.Label>
                                        <Form.Control
                                            type='text'
                                            id='name'
                                            value={valorContraseña}
                                            onChange={contraseñaChangeHandler}
                                            onBlur={contraseñaBlurHandler}
                                        />
                                        <br />
                                        {errorEnContraseña && <Alert variant="danger" >Porfavor introduzca una contraseña valida</Alert>}
                                    </div>
                                    <br />
                                    <div className='form-actions'>
                                        <Button href='/' variant="success" disabled={!formIsValid}>Submit</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <br />
        </Form>
        
    );
};

export default Resgistrarse;