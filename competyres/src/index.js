import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SessionProvider } from "./context/session-context";
import { BookingProvider } from "./context/booking-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionProvider>
      <BookingProvider>
        <App />
      </BookingProvider>
    </SessionProvider>
  </React.StrictMode>
);
