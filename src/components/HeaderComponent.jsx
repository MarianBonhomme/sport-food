import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useOrder } from "../context/orderContext";
import { UserContext } from "../context/userContext";
import { auth } from "../firebase-config";
import OrderDropdownComponent from "./OrderDropdownComponent";
import LogoComponent from './LogoComponent';

function HeaderComponent() {
  const { isLogged } = useContext(UserContext);
  const {isOrderDropdownOpen, openOrderDropdown, closeOrderDropdown} = useOrder();
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
    <div className="fixed top-0 left-0 w-full h-[70px] flex justify-between items-center bg-white shadow-border px-20 z-20">
      <NavLink to={"/"}>
        <LogoComponent />
      </NavLink>
      <nav className="flex items-center gap-10">
        <NavLink to={"/presentation"}>Présentation</NavLink>
        <NavLink to={"/menu"}>Carte</NavLink>
        <NavLink to={"/localisation"}>Localisation</NavLink>
        <div>
          <p onClick={isOrderDropdownOpen ? closeOrderDropdown : openOrderDropdown} className="bg-blue text-white rounded-3xl px-4 py-1 cursor-pointer">Panier</p>
          <OrderDropdownComponent />
        </div>
        {isLogged && (
          <>
            <NavLink to={"/private/list"}>Liste</NavLink>
            <NavLink to={"/private/add"}>Ajouter</NavLink>
            <button onClick={logout}>❌</button>
          </>
        )}
      </nav>
    </div>
  );
}

export default HeaderComponent;
