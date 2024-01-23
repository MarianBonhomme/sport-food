import React, { createContext, useContext, useEffect, useState } from "react";
import { saveCurrentOrderToLocalStorage, saveHistoricalOrdersToLocalStorage, getHistoricalOrdersFromLocalStorage, getCurrentOrderFromLocalStorage } from '../services/LocalStorageService';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [currentOrder, setCurrentOrder] = useState(getCurrentOrderFromLocalStorage());
  const [currentOrderPrice, setCurrentOrderPrice] = useState(0);
  const [historicalOrders, setHistoricalOrders] = useState(getHistoricalOrdersFromLocalStorage());
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);

  // Met à jour le prix total de la commande
  useEffect(() => {
    const currentOrderPrice = currentOrder.reduce((total, dish) => total + dish.totalPrice, 0);
    setCurrentOrderPrice(currentOrderPrice);
  }, [currentOrder]);

  // Récupère l'historique des commandes à partir du localStorage
  useEffect(() => {
    saveHistoricalOrdersToLocalStorage(historicalOrders)
  }, [historicalOrders])

  // Récupère la commande en cours à partir du localStorage
  useEffect(() => {
    saveCurrentOrderToLocalStorage(currentOrder)
  }, [currentOrder])

  const addToCurrentOrder = (dish) => {
    const existingDish = currentOrder.find((r) => r.uniqid === dish.uniqid);

    if (existingDish) {
      setCurrentOrder((prevCurrentOrder) =>
        prevCurrentOrder.map((r) =>
          r.uniqid === dish.uniqid
          ? { ...r, quantity: r.quantity + 1, totalPrice: (r.quantity + 1) * r.price }
          : r
        )
      );
    } else {
      setCurrentOrder((prevCurrentOrder) => [
        ...prevCurrentOrder, 
        { ...dish, quantity: 1, totalPrice: dish.price },
      ]);
    }
	  openOrderDropdown();
  };

  const incrementQuantity = (uniqid) => {
    setCurrentOrder((prevCurrentOrder) =>
      prevCurrentOrder.map((dish) =>
      dish.uniqid === uniqid
        ? {
            ...dish,
            quantity:
              dish.quantity + 1 <= dish.stock // N'incrémente pas au dessus du stock
                ? dish.quantity + 1
                : dish.quantity,
            totalPrice: // Prix total du plat en fonction de la quantité
              (dish.quantity + 1) * dish.price <= dish.stock * dish.price 
                ? (dish.quantity + 1) * dish.price
                : dish.totalPrice,
          }
        : dish
      )
    );
  };
  
  const decrementQuantity = (dishId) => {
    setCurrentOrder((prevCurrentOrder) =>
      prevCurrentOrder.map((dish) =>
        dish.uniqid === dishId
          ? {
              ...dish,
              quantity: dish.quantity > 1 ? dish.quantity - 1 : 0,
              totalPrice: (dish.quantity > 1 ? dish.quantity - 1 : 0) * dish.price,
            }
          : dish
      ).filter((dish) => dish.quantity > 0) // Supprime le plat de la commande
    );
  };

  const addToHistorical = () => {
    const orderWithInfos = {
      date: new Date,
      price: currentOrderPrice,
      items: currentOrder,
    };
    setHistoricalOrders([orderWithInfos, ...historicalOrders]);
    setCurrentOrder([]); // Réinitialise la commande en cours
    setCurrentOrderPrice(0);
  };

  const openOrderDropdown = () => {
    setIsOrderDropdownOpen(true);
  };

  const closeOrderDropdown = () => {
    setIsOrderDropdownOpen(false);
  };

  return (
    <OrderContext.Provider
      value={{
        currentOrder,
        currentOrderPrice,
        historicalOrders,
        isOrderDropdownOpen,
        addToCurrentOrder,
        addToHistorical,
        incrementQuantity,
        decrementQuantity,
        openOrderDropdown,
        closeOrderDropdown,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};
