import React from 'react';
import { useOrder } from '../context/orderContext';
import { NavLink } from 'react-router-dom';

function OrderComponent() {
  const { order, incrementQuantity, decrementQuantity, isDropdownOpen } = useOrder();

  return (
    <div className='absolute top-[80px] right-5 shadow-custom rounded-2xl bg-white'>
      {isDropdownOpen && (
        order && order.length > 0 ? (            
          <div className='flex flex-col items-start'>
            {order.map((dish) => {
              return (
                <div key={dish.id} className='px-5 py-3 border-b'>
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
            })}
            <div className='w-full flex justify-center my-3 gap-2'>
              <NavLink to={'/menu'}>
                <button className='w-32 bg-green text-white text-sm rounded-3xl py-2'>Menu</button>
              </NavLink>
              <NavLink to={'/order'}>
                <button className='w-32 bg-blue text-white text-sm rounded-3xl py-2'>Commander</button>
              </NavLink>
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-center gap-3 p-5'>
            <p className='text-grey text-sm'>Votre panier est vide.</p>
            <NavLink to={'/menu'}>
              <button className='w-32 bg-green text-white text-sm rounded-3xl py-2'>Menu</button>
            </NavLink>
          </div>
        )
      )}
    </div>
  );
}

export default OrderComponent;