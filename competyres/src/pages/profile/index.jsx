import Session from "../../context/session-context";
import { useContext } from "react";
import ProfileCard from "../../components/ProfileCard";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { userData, onLogout } = useContext(Session);

  const navigate = useNavigate();

  const logoutHandler = () => {
    onLogout();

    navigate("/");
  };

  return (
    <ProfileCard
      Name={userData.nombre}
      LastName={userData.apellido}
      Age={userData.edad}
      Email = {userData.email}
      logoutHandler = {logoutHandler}
    ></ProfileCard>
  );
};

export default Profile;
