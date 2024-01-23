import React from "react";
import { NavLink } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";
import { useOrder } from "../../context/orderContext";
import DishForConfirmedComponent from "../Dish/DishForConfirmedComponent";

function DeliveryConfirmedComponent(props) {
  const deliveryData = props.deliveryData;
  const { historicalOrders } = useOrder();
  const latestOrder = historicalOrders[0];
  
  return (
    <div className="w-full max-w-7xl flex flex-col items-center">
      <h3 className="text-5xl text-center font-semibold">Merci pour votre achat !</h3>
      <div className="w-full flex justify-between my-20">
        <div className="w-1/2 flex flex-col items-center">
          <h4 className="text-xl text-grey text-center font-semibold mb-10">Votre commande est en route</h4>
          <div className="flex flex-col gap-3">
            <p>Nom:<span className="font-bold ml-2">{deliveryData.fullName}</span></p>
            <p>Téléphone:<span className="font-bold ml-2">{deliveryData.phoneNumber}</span></p>
            <p>Adresse:<span className="font-bold ml-2">{deliveryData.deliveryAddress}</span></p>
            {deliveryData.specialInstructions && (
              <p>Instructions spéciales:<span className="font-bold ml-2">{deliveryData.specialInstructions}</span></p>
            )}
          </div>
        </div>
        <div className="w-1/2">
          <h4 className="text-xl text-grey text-center font-semibold mb-10">Récapitulatif de votre commande</h4>
          <div className="flex flex-col">
            <div className="border-t-2 px-5 py-3 relative">
              {latestOrder.items.map((dish, index) => {
                return (
                  <DishForConfirmedComponent key={index} dish={dish}/>
                )
              })}
            </div>
            <p className="text-end font-semibold text-lg border-t-2 pt-3">Total: {latestOrder.price}€</p>
          </div>
        </div>
      </div>
      <NavLink to={"/historical"}>
        <ButtonComponent color="orange" text="Voir l'historique de mes commandes"/>
      </NavLink>
    </div>
  );
}

export default DeliveryConfirmedComponent;
