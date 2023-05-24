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
  }, [isLogged]);

  const logoutHandler = () => {
    onLogout();

    navigate("/");
  };

  return (
    <div>
      <ProfileComponent
        Name={userData.nombre}
        LastName={userData.apellido}
        Age={userData.edad}
        Email={userData.email}
        logoutHandler={logoutHandler}
      ></ProfileComponent>
      <h1 className={CSS.record}>Historial de reservas</h1>
      {bookings.map((booking) => (
        <Booking key={booking._id} booking={booking}></Booking>
      ))}
    </div>
  );
};

export default Profile;
