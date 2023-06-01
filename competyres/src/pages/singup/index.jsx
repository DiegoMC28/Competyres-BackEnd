import useInput from "../../hooks/use-input";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import useHttp from "../../hooks/use-http";
import { Link } from "react-router-dom";
import CSS from "./Signup.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isValidContraseña = (value) => value.trim().length > 8;

const Resgistrarse = () => {
    const { isLoading, error, sendRequest } = useHttp();

    const usuarioHandler = async () => {
        const config = {
            url: "/usuario",
            method: "POST",
            body: {
                nombre: valorNombre,
                apellido: valorPrimerApellido,
                edad: valorEdad,
                email: valorEmail,
                contrasena: valorContraseña,
            },
        };

        const respuesta = await sendRequest(config);

        console.log(respuesta);
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

    if (
        nombreEsValido &&
        primerApellidoEsValido &&
        EdadEsValida &&
        emailEsValido &&
        contraseñaEsValida
    ) {
        formIsValid = true;
    }

    const onClickHandler = (event) => {
        event.preventDefault();

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
        <>
            <Form>
                <div className={CSS.page}>
                    <div className={CSS.center1}>
                        <h1>Rellene los campos</h1>
                        <hr />
                    </div>
                    <div className={CSS.grupo1}>
                        <div>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                id="nombre"
                                value={valorNombre}
                                onChange={nombreChangeHandler}
                                onBlur={nombreBlurHandler}
                            />
                            {ErrorEnNombre && (
                                <Alert variant="danger">
                                    Por favor introduzca un nombre.
                                </Alert>
                            )}
                        </div>

                        <div>
                            <Form.Label>Primer apellido</Form.Label>
                            <Form.Control
                                type="text"
                                id="apellido"
                                value={valorPrimerApellido}
                                onChange={primerApellidoChangeHandler}
                                onBlur={primerApellidoBlurHandler}
                            />
                            {ErrorEnPrimerApellido && (
                                <Alert variant="danger">
                                    Por favor introduzca el primer apellido
                                </Alert>
                            )}
                        </div>
                    </div>
                    <div className={CSS.grupo1}>
                        <div>
                            <Form.Label htmlFor="edad">Edad</Form.Label>
                            <Form.Control
                                type="number"
                                id="edad"
                                value={valorEdad}
                                onChange={edadChangeHandler}
                                onBlur={edadBlurHandler}
                            />
                            {ErrorEnEdad && (
                                <Alert variant="danger">
                                    Por favor introduzca la edad
                                </Alert>
                            )}
                        </div>

                        <div>
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control
                                type="text"
                                id="email"
                                value={valorEmail}
                                onChange={emailChangeHandler}
                                onBlur={emailBlurHandler}
                            />

                            {errorEnEmail && (
                                <Alert variant="danger">
                                    Porfavor introduzca un email valido
                                </Alert>
                            )}
                        </div>

                        <div>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                id="contraseña"
                                value={valorContraseña}
                                onChange={contraseñaChangeHandler}
                                onBlur={contraseñaBlurHandler}
                            />

                            {errorEnContraseña && (
                                <Alert variant="danger">
                                    Porfavor introduzca una contraseña valida
                                </Alert>
                            )}
                        </div>
                    </div>
                </div>
                <div className={CSS.center}>
                    <Button
                        onClick={onClickHandler}
                        variant="success"
                        disabled={!formIsValid}
                    >
                        <Link to="/login">
                            {isLoading ? "Enviando..." : "Submit"}
                        </Link>
                    </Button>
                </div>
                {error && (
                    <Alert className={CSS.alert} variant="danger">
                        {error}
                    </Alert>
                )}
            </Form>
        </>
    );
};

export default Resgistrarse;
