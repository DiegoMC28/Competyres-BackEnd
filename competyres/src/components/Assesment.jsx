import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Stars from "./Stars";
import CSS from "./Assesment.module.css";
import Session from "../context/session-context";
import useHttp from "../hooks/use-http";

function Assessment(props) {
    const { onSubmit = () => {} } = props;
    const { userData } = useContext(Session);
    const { sendRequest } = useHttp();
    const { token } = userData;
    const [show, setShow] = useState(false);
    const [score, setScore] = useState(1);
    const [textValue, setTextValue] = useState("");

    const onClickHandler = () => {
        setShow((prevState) => !prevState);
    };

    const onChangeHandler = (value) => {
        setScore(value);
    };

    const onAddClickhandler = async () => {
        const config = {
            url: "/valoracion",
            method: "Post",
            headers: { Authorization: token },
            body: {
                comentario: textValue,
                fechaPublicacion: new Date().toISOString(),
                puntuacion: score,
            },
        };

        const response = await sendRequest(config);
        setShow((prevState) => !prevState);
        onSubmit();
        console.log(response);
    };

    const onTextChangeHandler = (event) => {
        setTextValue(event.target.value);
    };

    return (
        <>
            {!show ? (
                <Button
                    className={CSS.button}
                    onClick={onClickHandler}
                    variant="warning"
                >
                    Añadir Valoracion
                </Button>
            ) : (
                <>
                    <textarea
                        maxLength={236}
                        rows={4}
                        style={{ resize: "none" }}
                        onChange={onTextChangeHandler}
                        placeholder="Escriba un comentario"
                    ></textarea>
                    <div className={CSS.space}>
                        <Stars onChange={onChangeHandler} value={score}></Stars>
                    </div>
                    <div className={CSS.buttonOrder}>
                        <Button
                            className={CSS.tamañoButton}
                            onClick={onAddClickhandler}
                            variant="success"
                        >
                            Enviar
                        </Button>
                        <Button
                            className={CSS.tamañoButton}
                            onClick={onClickHandler}
                            variant="danger"
                        >
                            Cancelar
                        </Button>
                    </div>
                </>
            )}
        </>
    );
}

export default Assessment;
