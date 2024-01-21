import React from 'react';
import { useOrder } from '../context/orderContext';

function OrderComponent() {
  const { order, incrementQuantity, decrementQuantity, isDropdownOpen } = useOrder();

  return (
    <div className='absolute top-[80px] right-5 shadow-custom rounded-2xl bg-white'>
      {isDropdownOpen && (
        <div className='flex flex-col items-start gap-3 px-5 py-3 border-b last:border-0'>
          {order && order.length > 0 ? (
            order.map((dish) => {
              return (
                <div key={dish.id}>
                  <div className='flex items-center gap-3'>
                    <img src={dish.image} className='w-20 rounded-full'/>
                    <div>
                      <h4 className='font-semibold'>{dish.name}</h4>
                      <p className='text-sm'>{dish.cuisine}</p>
                      <div className='flex items-center gap-x-1 mt-1 text-sm'>
                        <button onClick={() => decrementQuantity(dish.id)} className='h-5 w-5 bg-red text-white px-1 rounded-full'>-</button>
                        {dish.quantity}
                        <button onClick={() => incrementQuantity(dish.id)} className='h-5 w-5 bg-green text-white px-1 rounded-full'>+</button>
                      </div>
                    </div>
                  </div>              
                </div>
              );
            })
          ) : (
            <p className='text-grey text-sm'>Votre panier est vide.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default OrderComponent;