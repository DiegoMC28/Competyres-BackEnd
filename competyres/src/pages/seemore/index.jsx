import Session from "../../context/session-context";
import { useContext } from "react";
import ProfileCard from "../../components/profileCard/ProfileCard";

const SeeMore = () => {
  const { userData } = useContext(Session);
    
  return (
    <></>
  );
};

export default SeeMore;