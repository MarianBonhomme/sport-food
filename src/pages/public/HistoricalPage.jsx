import React from "react";
import { useOrder } from "../../context/orderContext";
import { NavLink } from "react-router-dom";
import TitleComponent from './../../components/TitleComponent';
import ButtonComponent from './../../components/ButtonComponent';

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
              <div key={index} className="w-full max-w-7xl flex justify-between border-t-2 last:border-b-2 px-5 py-3">
                <div>
                  {order.items.map((dish) => {
                    return (
                      <div key={dish.id} className="flex items-center gap-3 py-1">
                        <p className="text-sm font-semibold">{dish.quantity}x</p>
                        <img src={dish.image} className="w-20 rounded-full" />
                        <div>
                          <h4 className="font-semibold">{dish.name}</h4>
                          <p className="text-sm">{dish.cuisine}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                  <span className="font-medium text-grey">{formattedDate(order.date)}</span>
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
