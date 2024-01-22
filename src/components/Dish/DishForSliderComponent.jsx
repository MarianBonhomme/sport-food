import React from "react";
import { useOrder } from "../../context/orderContext";
import ButtonComponent from './../ButtonComponent';

function DishForSliderComponent(props) {
  const item = props.item;
  const { addToOrder } = useOrder();

  return (
    <div className="relative flex flex-col justify-between items-center text-center shadow-custom rounded-2xl py-4 px-2">
      <div className="absolute top-5 left-5 text-start">
        <p>⭐{item.rating}</p>
        <p>👁️{item.reviewCount}</p>
      </div>
      <img src={item.image} className="w-5/12 rounded-full mx-auto mb-3" />
      <div className="mb-3">
        <h3 className="font-bold">{item.name}</h3>
        <p className="text-sm">{item.cuisine}</p>
      </div>
      <button onClick={() => addToOrder(item)}>
        <ButtonComponent text="Ajouter au panier" color="green" size="xs" />
      </button>
    </div>
  );
}

export default DishForSliderComponent;
