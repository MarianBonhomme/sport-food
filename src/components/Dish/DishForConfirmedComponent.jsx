import React from "react";

function DishForConfirmedComponent({dish}) {
  return (
    <div className="flex justify-between items-center py-1">
      <div className="flex items-center gap-3">
        <p className="text-sm font-semibold">{dish.quantity}x</p>
        <img src={dish.image} className="w-20 rounded-full" />
        <div>
          <h4 className="text-lg font-semibold">{dish.name}</h4>
          <p className="text-sm">{dish.speciality}</p>
        </div>
      </div>
      <p className="font-semibold">
        {dish.price * dish.quantity}€
      </p>
    </div>
  );
}

export default DishForConfirmedComponent;
