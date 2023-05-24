import Session from "../../context/session-context";
import { useContext } from "react";
import ReserveCard from "../../components/ReserveCard";
import { useNavigate } from "react-router-dom";

const Reserve = () => {
  const { userData } = useContext(Session);

  return <></>;
};

export default Reserve;
