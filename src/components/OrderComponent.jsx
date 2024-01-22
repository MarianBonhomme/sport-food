import React from 'react';
import { NavLink } from 'react-router-dom';
import { useOrder } from '../context/orderContext';
import DishForOrderDropdownComponent from './Dish/DishForOrderDropdownComponent';

function OrderComponent() {
  const { order, isDropdownOpen, closeDropdown } = useOrder();

  return (
    <div className='absolute top-[80px] right-5 shadow-custom rounded-2xl bg-white'>
      {isDropdownOpen && (
        order && order.length > 0 ? (            
          <div className='flex flex-col items-start'>
            {order.map((dish) => {
              return (
                <DishForOrderDropdownComponent key={dish.id} dish={dish} />
              );
            })}
            <div className='w-full flex justify-center'>
              <NavLink to={'/menu'}>
                <button className='w-32 bg-green text-white text-sm rounded-3xl py-2 m-2'>Menu</button>
              </NavLink>
              <NavLink to={'/order'}>
                <button className='w-32 bg-blue text-white text-sm rounded-3xl py-2 m-2 ml-0' onClick={closeDropdown}>Commander</button>
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