import React from "react";
import { NavLink } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";

function DeliveryConfirmedComponent(props) {
  const deliveryData = props.deliveryData;
  
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-5xl text-center font-semibold mb-3">Merci pour votre achat !</h3>
      <h3 className="text-3xl text-grey text-center font-semibold mb-10">Votre commande est en route.</h3>
      <div className="flex flex-col gap-3 mb-10">
        <p>Nom:<span className="font-bold ml-2">{deliveryData.fullName}</span></p>
        <p>Téléphone:<span className="font-bold ml-2">{deliveryData.phoneNumber}</span></p>
        <p>Adresse:<span className="font-bold ml-2">{deliveryData.deliveryAddress}</span></p>
        {deliveryData && (
          <p>Instructions spéciales:<span className="font-bold ml-2">{deliveryData.specialInstructions}</span></p>
        )}
      </div>
      <NavLink to={"/historical"}>
        <ButtonComponent color="orange" text="Voir l'historique de mes commandes"/>
      </NavLink>
    </div>
  );
}

export default DeliveryConfirmedComponent;
