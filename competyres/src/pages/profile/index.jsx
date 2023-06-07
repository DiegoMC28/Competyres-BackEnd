import Session from "../../context/session-context";
import { useContext, useState, useEffect } from "react";
import ProfileComponent from "../../components/Profile";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import Booking from "../../components/Booking";
import CSS from "./Profile.module.css";

const Profile = () => {
    const { userData, onLogout } = useContext(Session);
    const navigate = useNavigate();
    const { token, isLogged } = userData;
    const [bookings, setBookings] = useState([]);
    const { sendRequest } = useHttp();

    useEffect(() => {
        if (isLogged) {
            const config = {
                url: "/alquileres",
                method: "GET",
                headers: { Authorization: token },
            };

            sendRequest(config).then((bookings) => {
                setBookings(bookings);
            });
        }
    }, [isLogged, sendRequest, token]);

    const cancelBooking = async (token, _id) => {
        const config = {
            url: "/eliminaralquiler/" + _id,
            method: "DELETE",
            headers: { Authorization: token },
        };

        const respuesta = await sendRequest(config);
        setBookings(respuesta.alquileres);
    };

    const logoutHandler = () => {
        onLogout();

        navigate("/");
    };

    const bookingHistory = [];
    const bookingCurrent = [];

    const hoy = new Date();

    bookings.forEach((booking) => {
        if (new Date(booking.fecha) < hoy) {
            bookingHistory.push(booking);
        } else if (new Date(booking.fecha) > hoy) {
            bookingCurrent.push(booking);
        }
    });

    return (
        <div>
            <ProfileComponent
                Name={userData.nombre}
                LastName={userData.apellido}
                Age={userData.edad}
                Email={userData.email}
                logoutHandler={logoutHandler}
            ></ProfileComponent>
            {bookingCurrent.length !== 0 && (
                <>
                    <h1 className={CSS.record}>Reservas pendientes</h1>
                    <hr />
                </>
            )}
            {bookingCurrent.map((booking) => (
                <Booking
                    key={booking._id}
                    booking={booking}
                    onCancelHandler={cancelBooking}
                ></Booking>
            ))}

            {bookingHistory.length !== 0 && (
                <>
                    <h1 className={CSS.record}>Historial de reservas</h1>
                    <hr />
                </>
            )}
            {bookingHistory.map((booking) => (
                <Booking
                    key={booking._id}
                    booking={booking}
                    onCancelHandler={cancelBooking}
                ></Booking>
            ))}
        </div>
    );
};

export default Profile;
