import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/userContext";

function PrivatePage() {
  const { isLogged } = useContext(UserContext);

  if (!isLogged) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
}

export default PrivatePage;
