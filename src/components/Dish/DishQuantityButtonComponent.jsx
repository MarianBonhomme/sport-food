import React from "react";
import { useOrder } from "../../context/orderContext";

function DishQuantityButtonComponent(props) {
  const { incrementQuantity, decrementQuantity } = useOrder();

  return (
    <div className="flex items-center gap-x-2 mt-2 select-none text-sm">
      <button
        onClick={() => decrementQuantity(props.dish.id)}
        className="h-5 w-5 bg-red text-white px-1 rounded-full"
      >
        -
      </button>
      {props.dish.quantity}
      <button
        onClick={() => incrementQuantity(props.dish.id)}
        className="h-5 w-5 bg-green text-white px-1 rounded-full"
      >
        +
      </button>
    </div>
  );
}

export default DishQuantityButtonComponent;
