import React from "react";
import { useOrder } from "../../context/orderContext";
import ButtonComponent from './../ButtonComponent';

function DishForMenuComponent(props) {
  const item = props.item;
  const { addToOrder } = useOrder();

  return (
	<div className="relative w-[400px] flex flex-col justify-between text-center shadow-custom rounded-2xl pt-10 pb-5 px-6">
		<div className="absolute top-5 left-5">
			{item.mealType.map((type) => {
				return <p key={type} className="text-grey text-sm font-bold text-start">{type}</p>
			})}
		</div>
		<div className="absolute top-5 right-5 text-end">
			<p>{item.rating}⭐</p>
			<p>{item.reviewCount}👁️</p>
		</div>
		<img src={item.image} className="w-36 rounded-full mx-auto mb-5" />
		<div className="pb-10">
			<h3 className="text-lg font-bold">{item.name}</h3>
			<p>{item.cuisine}</p>
		</div>
		<div className="text-xs">
			<div className="flex justify-between items-end text-grey mb-5">
				<div className="flex items-center">
					<span className="text-xl">👤</span>
					<p className="text-start">{item.servings} personnes<br></br>{item.caloriesPerServing}kcal par personne</p>
				</div>
				<div className="flex items-center">
					<span className="text-xl">⏱️</span>
					<p className="text-start">{item.prepTimeMinutes}min préparation<br></br>{item.cookTimeMinutes}min cuisson</p>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex flex-wrap gap-x-3 font-bold">
					{item.tags.map((tag) => {
						return <span key={tag} className="text-blue">#{tag}</span>
					})}
				</div>
				
				<button onClick={() => addToOrder(item)}>
					<ButtonComponent text="Ajouter au panier" color="green" size="xs" />
				</button>
			</div>
		</div>
	</div>
  );
}

export default DishForMenuComponent;
