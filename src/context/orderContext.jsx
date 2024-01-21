import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const addToOrder = (dish) => {
    const existingDish = order.find((r) => r.id === dish.id);

    if (existingDish) {
      setOrder((prevOrder) =>
        prevOrder.map((r) =>
          r.id === dish.id ? { ...r, quantity: r.quantity + 1 } : r
        )
      );
    } else {
      setOrder((prevOrder) => [...prevOrder, { ...dish, quantity: 1 }]);
      setIsDropdownOpen(true);
    }
	openDropdown();
  };

  const removeFromOrder = (dishId) => {
    setOrder((prevOrder) =>
      prevOrder.filter((dish) => dish.id !== dishId)
    );
  };

  const incrementQuantity = (dishId) => {
    setOrder((prevOrder) =>
      prevOrder.map((dish) =>
        dish.id === dishId
          ? { ...dish, quantity: dish.quantity + 1 }
          : dish
      )
    );
  };

  const decrementQuantity = (dishId) => {
    setOrder((prevOrder) =>
      prevOrder
        .map((dish) =>
          dish.id === dishId
            ? {
                ...dish,
                quantity: dish.quantity > 1 ? dish.quantity - 1 : 0,
              }
            : dish
        )
        .filter((dish) => dish.quantity > 0)
    );
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
        isDropdownOpen,
        addToOrder,
        removeFromOrder,
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
