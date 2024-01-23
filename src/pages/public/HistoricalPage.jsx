import React from "react";
import { useOrder } from "../../context/orderContext";
import { NavLink } from "react-router-dom";
import TitleComponent from './../../components/TitleComponent';
import ButtonComponent from './../../components/ButtonComponent';
import DishForHistoricalComponent from "../../components/Dish/DishForHistoricalComponent";

function HistoricalPage() {
  const { historicalOrders } = useOrder();

  const formattedDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString("fr-FR", options);
  };

  return (
    <div className="p-10">
      <TitleComponent text={"Historique des commandes"} />
      {historicalOrders && historicalOrders.length > 0 ? (
        <div className="flex flex-col items-center"> 
          {historicalOrders.map((order, index) => {
            return (
              <div key={index} className="w-full max-w-7xl border-t-2 last:border-b-2 px-5 py-3 relative">
                {order.items.map((dish, index) => {
                  return (
                    <DishForHistoricalComponent key={index} dish={dish} />
                  )
                })}
                <span className="absolute top-[20px] right-[20px] font-medium text-grey">{formattedDate(order.date)}</span>
                <span className="absolute bottom-[20px] right-[20px] font-semibold text-xl">Total: {order.price}€</span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full flex flex-col items-center">
          <p className="text-grey text-xl max-w-md text-center my-10">
            Vous n'avez pas encore passé commande chez nous 🥺
          </p>
          <NavLink to={"/menu"}>
            <ButtonComponent text="Je tente l'expérience!" color="green" /> 
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default HistoricalPage;
