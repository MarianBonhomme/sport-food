import React, { createContext, useContext, useEffect, useState } from "react";
import { saveOrderToLocalStorage, saveHistoricalOrdersToLocalStorage, getHistoricalOrdersFromLocalStorage, getOrderFromLocalStorage } from '../services/LocalStorageService';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(getOrderFromLocalStorage());
  const [orderPrice, setOrderPrice] = useState(0);
  const [historicalOrders, setHistoricalOrders] = useState(getHistoricalOrdersFromLocalStorage());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const orderPrice = order.reduce((total, dish) => total + dish.totalPrice, 0);
    setOrderPrice(orderPrice);
  }, [order]);

  useEffect(() => {
    saveHistoricalOrdersToLocalStorage(historicalOrders)
  }, [historicalOrders])

  useEffect(() => {
    saveOrderToLocalStorage(order)
  }, [order])

  const addToOrder = (dish) => {
    const existingDish = order.find((r) => r.uniqid === dish.uniqid);

    if (existingDish) {
      setOrder((prevOrder) =>
        prevOrder.map((r) =>
          r.uniqid === dish.uniqid
          ? { ...r, quantity: r.quantity + 1, totalPrice: (r.quantity + 1) * r.price }
          : r
        )
      );
    } else {
      setOrder((prevOrder) => [
        ...prevOrder, 
        { ...dish, quantity: 1, totalPrice: dish.price },
      ]);
    }
	  openDropdown();
  };

  const incrementQuantity = (dishId) => {
    setOrder((prevOrder) =>
      prevOrder.map((dish) =>
        dish.uniqid === dishId
          ? { ...dish, quantity: dish.quantity + 1, totalPrice: (dish.quantity + 1) * dish.price }
          : dish
      )
    );
  };
  
  const decrementQuantity = (dishId) => {
    setOrder((prevOrder) =>
      prevOrder.map((dish) =>
        dish.uniqid === dishId
          ? {
              ...dish,
              quantity: dish.quantity > 1 ? dish.quantity - 1 : 0,
              totalPrice: (dish.quantity > 1 ? dish.quantity - 1 : 0) * dish.price,
            }
          : dish
      ).filter((dish) => dish.quantity > 0)
    );
  };

  const addToHistorical = () => {
    const orderWithInfos = {
      date: new Date,
      price: orderPrice,
      items: order,
    };
    setHistoricalOrders([orderWithInfos, ...historicalOrders]);
    setOrder([]);
    setOrderPrice(0);
  };

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        orderPrice,
        historicalOrders,
        isDropdownOpen,
        addToOrder,
        addToHistorical,
        incrementQuantity,
        decrementQuantity,
        openDropdown,
        closeDropdown,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};
