import React from "react";
import { useOrder } from "../../context/orderContext";

function HistoricalPage() {
  const { historicalOrders } = useOrder();

  const formattedDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString("fr-FR", options);
  };

  return (
    <div>
      {historicalOrders && historicalOrders.length > 0 ? (
        <div>
          {historicalOrders.map((order, index) => {
            return (
              <div key={index}>
                <span>{formattedDate(order.date)}</span>
                {order.items.map((dish) => {
                  return <div key={dish.id}>{dish.name}</div>;
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h3>Vous n'avez pas encore passé commande chez nous !</h3>
        </div>
      )}
    </div>
  );
}

export default HistoricalPage;
