import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const addToOrder = (recipe) => {
    const existingRecipe = order.find((r) => r.id === recipe.id);

    if (existingRecipe) {
      setOrder((prevOrder) =>
        prevOrder.map((r) =>
          r.id === recipe.id ? { ...r, quantity: r.quantity + 1 } : r
        )
      );
    } else {
      setOrder((prevOrder) => [...prevOrder, { ...recipe, quantity: 1 }]);
      setIsDropdownOpen(true);
    }
	openDropdown();
  };

  const removeFromOrder = (recipeId) => {
    setOrder((prevOrder) =>
      prevOrder.filter((recipe) => recipe.id !== recipeId)
    );
  };

  const incrementQuantity = (recipeId) => {
    setOrder((prevOrder) =>
      prevOrder.map((recipe) =>
        recipe.id === recipeId
          ? { ...recipe, quantity: recipe.quantity + 1 }
          : recipe
      )
    );
  };

  const decrementQuantity = (recipeId) => {
    setOrder((prevOrder) =>
      prevOrder
        .map((recipe) =>
          recipe.id === recipeId
            ? {
                ...recipe,
                quantity: recipe.quantity > 1 ? recipe.quantity - 1 : 0,
              }
            : recipe
        )
        .filter((recipe) => recipe.quantity > 0)
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
