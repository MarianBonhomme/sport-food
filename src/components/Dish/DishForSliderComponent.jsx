import React from "react";
import { useOrder } from "../../context/orderContext";
import ButtonComponent from './../ButtonComponent';

function DishForSliderComponent(props) {
  const item = props.item;
  const { addToCurrentOrder } = useOrder();

  return (
    <div className="relative flex flex-col justify-between items-center text-center shadow-custom rounded-2xl px-4 py-3">
      <h3 className="font-bold mb-3">{item.name}</h3>
      <div className="grid grid-cols-2">
        <img src={item.image} className="w-32 rounded-full" />
        <div className="flex flex-col justify-center text-center text-lg">
          <p>{item.rating}⭐</p>
          <p className="mb-5 text-blue">{item.price.toFixed(2)}€</p>     
          <p onClick={() => addToCurrentOrder(item)}>
            <ButtonComponent text="Ajouter au panier" color="green" size="xs" />
          </p>
        </div>
      </div> 
    </div>
  );
}

export default DishForSliderComponent;
