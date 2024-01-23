import React from 'react'

function DishForHistoricalComponent({dish}) {
  return (
	<div className="flex items-center gap-3 py-1">
		<p className="text-sm font-semibold">{dish.quantity}x</p>
		<img src={dish.image} className="w-28 rounded-full" />
		<div>
			<h4 className="text-xl font-semibold">{dish.name}</h4>
			<p>{dish.speciality}</p>
			<p className="text-blue text-sm font-semibold">{dish.price * dish.quantity}€</p>
		</div>
	</div>
  )
}

export default DishForHistoricalComponent