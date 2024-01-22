import React from "react";
import DishQuantityButtonComponent from "./DishQuantityButtonComponent";

function DishForOrderDropdownComponent(props) {
  return (
    <div className="w-full px-5 py-3 border-b">
      <div className="flex items-center gap-3">
        <img src={props.dish.image} className="w-20 rounded-full" />
        <div>
          <h4 className="font-semibold">{props.dish.name}</h4>
          <p className="text-sm">{props.dish.cuisine}</p>
          <DishQuantityButtonComponent dish={props.dish} />
        </div>
      </div>
    </div>
  );
}

export default DishForOrderDropdownComponent;
