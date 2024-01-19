import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/userContext";

function Footer() {
  const { isLogged } = useContext(UserContext);

  return (
    <footer className="relative bottom-0 w-full h-[70px] flex justify-between items-center shadow-border px-20">
      <div>© Sport Food - 2024</div>
      {!isLogged && <NavLink to={"/connexion"}>Administration</NavLink>}
    </footer>
  );
}

export default Footer;
