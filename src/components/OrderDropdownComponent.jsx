import React from 'react';
import { NavLink } from 'react-router-dom';
import { useOrder } from '../context/orderContext';
import DishForOrderDropdownComponent from './Dish/DishForOrderDropdownComponent';
import ButtonComponent from './ButtonComponent';

function OrderDropdownComponent() {
  const { currentOrder, currentOrderPrice, isOrderDropdownOpen, closeOrderDropdown } = useOrder();

  return (
    <div className='absolute top-[80px] right-5 shadow-custom rounded-2xl bg-white'>
      {isOrderDropdownOpen && (
        currentOrder && currentOrder.length > 0 ? (            
          <div className='flex flex-col items-start'>
            {currentOrder.map((dish, index) => {
              return (
                <DishForOrderDropdownComponent key={index} dish={dish} />
              );
            })}
            <div className='w-full flex flex-col items-center'>
              <p className='m-2 mb-0'>Total: {currentOrderPrice}€</p>
              <div className='w-full flex justify-center'>
                <NavLink to={'/menu'}>
                  <ButtonComponent text="Menu" color="green" size="sm" customStyle="w-32 m-2"/>
                </NavLink>
                <NavLink to={'/order'} onClick={closeOrderDropdown}>
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

export default OrderDropdownComponent;