import React  from 'react';
import { useOrder } from '../context/orderContext';

function OrderComponent() {
  const { order, incrementQuantity, decrementQuantity } = useOrder();

  return (
    <div>
      {order && order.length > 0 ? (
        order.map((recipe) => {
          return (
            <div key={recipe.id} className='flex flex-col items-start gap-3 px-5 py-3 border-b last:border-0'>
              <div className='flex items-center gap-3'>
                <img src={recipe.image} className='w-20 rounded-full'/>
                <div>
                  <h4 className='font-semibold'>{recipe.name}</h4>
                  <p className='text-sm'>{recipe.cuisine}</p>
                  <div className='flex items-center gap-x-1 mt-1 text-sm'>
                    <button onClick={() => decrementQuantity(recipe.id)} className='h-5 w-5 bg-red text-white px-1 rounded-full'>-</button>
                    {recipe.quantity}
                    <button onClick={() => incrementQuantity(recipe.id)} className='h-5 w-5 bg-green text-white px-1 rounded-full'>+</button>
                  </div>
                </div>
              </div>              
            </div>
          );
        })
      ) : (
        <div>Panier vide</div>
      )}
    </div>
  );
}

export default OrderComponent;