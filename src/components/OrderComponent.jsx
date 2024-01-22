import React from 'react';
import { NavLink } from 'react-router-dom';
import { useOrder } from '../context/orderContext';
import DishForOrderDropdownComponent from './Dish/DishForOrderDropdownComponent';
import ButtonComponent from './ButtonComponent';

function OrderComponent() {
  const { order, orderPrice, isDropdownOpen, closeDropdown } = useOrder();

  return (
    <div className='absolute top-[80px] right-5 shadow-custom rounded-2xl bg-white'>
      {isDropdownOpen && (
        order && order.length > 0 ? (            
          <div className='flex flex-col items-start'>
            {order.map((dish, index) => {
              return (
                <DishForOrderDropdownComponent key={index} dish={dish} />
              );
            })}
            <div>
              <p className='m-2 mb-0'>Total: {orderPrice.toFixed(2)}€</p>
              <div className='w-full flex justify-center'>
                <NavLink to={'/menu'}>
                  <ButtonComponent text="Menu" color="green" size="sm" customStyle="w-32 m-2"/>
                </NavLink>
                <NavLink to={'/order'} onClick={closeDropdown}>
                  <ButtonComponent text="Commander" color="blue" size="sm" customStyle="w-32 m-2"/>
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-center gap-3 p-5'>
            <p className='text-grey text-sm'>Votre panier est vide.</p>
            <NavLink to={'/menu'}>
              <ButtonComponent text="Menu" color="green" size="sm" customStyle="w-32"/>
            </NavLink>
          </div>
        )
      )}
    </div>
  );
}

export default OrderComponent;