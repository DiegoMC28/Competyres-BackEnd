import { useContext } from "react";
import Booking from "../context/booking-context";

const useBooking = () => {
  const booking = useContext(Booking);

  return booking;
};

export default useBooking;
