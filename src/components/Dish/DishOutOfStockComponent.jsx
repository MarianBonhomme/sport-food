import React from 'react'

function DishOutOfStockComponent(props) {
	const item = props.item;

  return (
	<div className="relative w-[450px] mt-[100px] pt-[150px] flex flex-col justify-between text-center shadow-custom rounded-2xl p-3 opacity-50 select-none">
		<div className="absolute -top-[100px] left-0 w-full flex justify-between items-center px-3 select-none">
			<p className="text-start text-sm text-white rounded-3xl py-1 px-2 bg-blue">
				{item.price.toFixed(2)}
				<span className="text-xs">€</span>
			</p>
			<img src={item.image} className="w-[250px] rounded-full" />
			<p className="text-end text-lg font-bold">{item.rating}⭐</p>
		</div>
		<div className="flex justify-between items-center mb-3">
			<div className="text-start">
				<h3 className="text-lg font-bold">{item.name}</h3>
				<p>{item.speciality}</p>
			</div>		
			<div className="text-grey text-end text-sm">
				<p>{item.kcal} calories</p>
				<p>{item.protein} protéines</p>
				<p>{item.carbs} glucides</p>
				<p>{item.fats} lipides</p>
			</div>		
		</div>
	<p className='absolute bottom-0 left-0 text-5xl text-center font-bold text-black -rotate-12'>Victime de son succès</p>
	</div>
  )
}

export default DishOutOfStockComponent