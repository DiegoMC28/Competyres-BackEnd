import Session from "../../context/session-context";
import { useContext } from "react";
import ProfileCard from "../../components/profileCard/ProfileCard";

const Profile = () => {
  const { userData } = useContext(Session);

  return (
    <ProfileCard
      Name={userData.nombre}
      LastName={userData.apellido}
      Age={userData.edad}
      Email = {userData.email}
    ></ProfileCard>
  );
};

export default Profile;
