import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

function Header() {
  const { isLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = async () => {
    const confirmed = window.confirm("Voulez-vous vraiment vous déconnecter ?")
    if (confirmed) {
      try {
        await signOut(auth);
        navigate("/");
      } catch {
        console.log("Erreur lors de la déconnexion");
      }
    }
  };

  return (
    <div className="w-full h-[70px] flex justify-between items-center shadow-border px-20">
      <NavLink to={"/"}>
        <img src="src/assets/img/logo.png" className="h-10"/>
      </NavLink>
      <nav className="flex gap-10">
        <NavLink to={"/presentation"}>Présentation</NavLink>
        <NavLink to={"/carte"}>Carte</NavLink>
        <NavLink to={"/localisation"}>Localisation</NavLink>
        {isLogged && (
          <>
            <NavLink to={"/private/liste"}>Liste</NavLink>
            <NavLink to={"/private/ajouter"}>Ajouter</NavLink>
            <button onClick={logout}>❌</button>
          </>
        )}
      </nav>
    </div>
  );
}

export default Header;
