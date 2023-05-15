import React, { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";

const userModel = {
  isLogged: false,
  _id: "",
  nombre: "",
  apellido: "",
  edad: 0,
  email: "",
  contrasena: "",
};

const Session = React.createContext({
  userData: userModel,
  onLogout: async () => {},
  onLogin: async (email, password) => {},
});

export const SessionProvider = (props) => {
  const [userData, setUserData] = useState(userModel);
  const { sendRequest } = useHttp();

  useEffect(() => {
    const token = localStorage.getItem("Sesion");

    const config = {
      url: "/usuario",
      method: "GET",
      headers: { Authorization: token },
    };

    sendRequest(config).then((usuario) => {
      if (!usuario.error) {
        setUserData({ isLogged: true, ...usuario });
      }
    });
  }, []);

  const onLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setUserData(false);
  };

  const onLogin = async (email, password) => {
    const config = {
      url: "/login",
      method: "POST",
      body: {
        email: email,
        contrasena: password,
      },
    };

    const loginResponse = await sendRequest(config);
    const { token, usuario, error } = loginResponse;

    localStorage.setItem("Sesion", token);

    if (!error) setUserData({ isLogged: true, ...usuario });
  };

  return (
    <Session.Provider
      value={{
        userData: userData,
        onLogout: onLogout,
        onLogin: onLogin,
      }}
    >
      {props.children}
    </Session.Provider>
  );
};

export default Session;
