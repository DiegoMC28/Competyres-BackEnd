import Session from "../../context/session-context";
import { useContext, useState, useEffect } from "react";
import ProfileComponent from "../../components/Profile";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import Booking from "../../components/Booking";
import CSS from "./Profile.module.css";
import moment from "moment";

const Profile = () => {
    const { userData, onLogout } = useContext(Session);
    const navigate = useNavigate();
    const { token, isLogged } = userData;

    const [bookingsHistory, setBookingsHistory] = useState([]);
    const [bookingsCurrent, setBookingsCurrent] = useState([]);
    const { sendRequest } = useHttp();

    useEffect(() => {
        if (isLogged) {
            const config = {
                url: "/alquileres",
                method: "GET",
                headers: { Authorization: token },
            };

            sendRequest(config).then((bookings) => {
                const [bookingHistory, bookingCurrent] =
                    bookingFilter(bookings);

                setBookingsHistory(bookingHistory);
                setBookingsCurrent(bookingCurrent);
            });
        }
    }, [isLogged, sendRequest, token]);

    const bookingFilter = (bookings) => {
        const bookingHistory = [];
        const bookingCurrent = [];
        const hoy = moment().format("YYYY-MM-DD");

        bookings.forEach((booking) => {
            if (booking.fecha < hoy) {
                bookingHistory.push(booking);
            } else if (booking.fecha > hoy) {
                bookingCurrent.push(booking);
            }
        });

        return [bookingHistory, bookingCurrent];
    };

    const cancelBooking = async (token, _id) => {
        const config = {
            url: "/eliminaralquiler/" + _id,
            method: "DELETE",
            headers: { Authorization: token },
        };

        const respuesta = await sendRequest(config);
        const [bookingHistory, bookingCurrent] = bookingFilter(respuesta);

        setBookingsHistory(bookingHistory);
        setBookingsCurrent(bookingCurrent);

        // const config = {
        //     url: "/alquileres",
        //     method: "GET",
        //     headers: { Authorization: token },
        // };

        // sendRequest(config).then((bookings) => {
        //     setBookings(bookings);
        // });
    };

    const logoutHandler = () => {
        onLogout();

        navigate("/");
    };

    console.log({ bookingsCurrent, bookingsHistory });

    return (
        <div className={CSS.margin}>
            <ProfileComponent
                Name={userData.nombre}
                LastName={userData.apellido}
                Age={userData.edad}
                Email={userData.email}
                logoutHandler={logoutHandler}
            ></ProfileComponent>
            {bookingsCurrent.length !== 0 && (
                <>
                    <h1 className={CSS.record}>Reservas pendientes</h1>
                    <hr />
                </>
            )}
            {bookingsCurrent.map((booking) => (
                <Booking
                    key={booking._id}
                    booking={booking}
                    onCancelHandler={cancelBooking}
                ></Booking>
            ))}

            {bookingsHistory.length !== 0 && (
                <>
                    <h1 className={CSS.record}>Historial de reservas</h1>
                    <hr />
                </>
            )}
            {bookingsHistory.map((booking) => (
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
