import React from "react";
import DishQuantityButtonComponent from "./DishQuantityButtonComponent";

function DishForOrderPageComponent(props) {
  return (
    <div key={props.dish}>
      <div className="max-w-xl flex items-center gap-5 border-t last:border-b py-5">
      <img src={props.dish.image} className="w-32 rounded-full" />
        <div className="w-full flex justify-between items-center">
          <div>
            <h4 className="text-xl font-semibold">{props.dish.name}</h4>
            <p>{props.dish.speciality}</p>
            <DishQuantityButtonComponent dish={props.dish}/>
          </div>
          <p className="text-lg">{(props.dish.price * props.dish.quantity).toFixed(2)}€</p>
        </div>
      </div>
    </div>
  );
}

export default DishForOrderPageComponent;
