import { signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useOrder } from "../context/orderContext";
import { UserContext } from "../context/userContext";
import { auth } from "../firebase-config";
import OrderDropdownComponent from "./OrderDropdownComponent";
import LogoComponent from './LogoComponent';

function HeaderComponent() {
  const { isLogged } = useContext(UserContext);
  const {isOrderDropdownOpen, openOrderDropdown, closeOrderDropdown} = useOrder();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const styleActiveLink = 'flex after:w-2/3 after:h-1 after:absolute after:-bottom-1 after:left-0 after:bg-blue after:rounded-xl'

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

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
        <NavLink to={"/presentation"}>
          <div className={`flex relative ${activeLink === "/presentation" ? styleActiveLink : ""}`}>Présentation</div>
        </NavLink>
        <NavLink to={"/menu"}>
          <div className={`flex relative ${activeLink === "/menu" ? styleActiveLink : ""}`}>Carte</div>
        </NavLink>
        <NavLink to={"/localisation"}>
          <div className={`flex relative ${activeLink === "/localisation" ? styleActiveLink : ""}`}>Localisation</div>
        </NavLink>
        <div>
          <p onClick={isOrderDropdownOpen ? closeOrderDropdown : openOrderDropdown} className="bg-blue text-white rounded-3xl px-4 py-1 cursor-pointer">Panier</p>
          <OrderDropdownComponent />
        </div>
        {isLogged && (
          <>
            <NavLink to={"/private/list"}>              
              <div className={`flex relative ${activeLink === "/private/list" ? styleActiveLink : ""}`}>Administration</div>
            </NavLink>
            <button onClick={logout}>❌</button>
          </>
        )}
      </nav>
    </div>
  );
}

export default HeaderComponent;
