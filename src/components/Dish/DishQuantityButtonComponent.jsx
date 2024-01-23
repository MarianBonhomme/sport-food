import React from "react";
import { useOrder } from "../../context/orderContext";

function DishQuantityButtonComponent({dish}) {
  const { incrementQuantity, decrementQuantity } = useOrder();

  return (
    <div className="flex items-center gap-x-2 mt-2 text-sm">
      <button
        onClick={() => decrementQuantity(dish.uniqid)}
        className="h-5 w-5 bg-red text-white px-1 rounded-full"
      >
        -
      </button>
      {dish.quantity}
      <button
        onClick={() => incrementQuantity(dish.uniqid)}
        className="h-5 w-5 bg-green text-white px-1 rounded-full"
      >
        +
      </button>
    </div>
  );
}

export default DishQuantityButtonComponent;
