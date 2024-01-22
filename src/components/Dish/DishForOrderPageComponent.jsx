import React from "react";
import DishQuantityButtonComponent from "./DishQuantityButtonComponent";

function DishForOrderPageComponent(props) {
  return (
    <div key={props.dish.id}>
      <div className="max-w-xl flex items-center gap-5 border-t last:border-b py-5">
        <img src={props.dish.image} className="w-32 rounded-full" />
        <div>
          <h4 className="text-xl font-semibold">{props.dish.name}</h4>
          <p>{props.dish.cuisine}</p>
          <DishQuantityButtonComponent dish={props.dish} />
        </div>
      </div>
    </div>
  );
}

export default DishForOrderPageComponent;
