import React, { useState } from 'react'
import { useOrder } from '../../context/orderContext';
import DishSliderComponent from '../../components/DishSliderComponent';
import DeliveryFormComponent from '../../components/DeliveryFormComponent';
import DeliveryConfirmedComponent from '../../components/DeliveryConfirmedComponent';
import DishQuantityButtonComponent from '../../components/DishQuantityButtonComponent';

function OrderPage() {
  const { order, addToHistorical } = useOrder();
  const [ confirmed, setConfirmed ] = useState(false);
  const [ deliveryData, setDeliveryData]  = useState();
  
  const confirmDelivery = (formData) => {
    setConfirmed(true);
    setDeliveryData(formData);
    addToHistorical();
  }

  return (
    <div className='w-full flex justify-center items-center p-20'>
      {!confirmed ? (
        order && order.length > 0 ? (
          <div className='w-full flex'>
            <div className='w-1/2'>
              {order.map((dish) => {
                return (
                  <div key={dish.id} >
                    <div className='max-w-xl flex items-center gap-5 border-t last:border-b py-5'>
                      <img src={dish.image} className='w-32 rounded-full'/>
                      <div>
                        <h4 className='text-xl font-semibold'>{dish.name}</h4>
                        <p>{dish.cuisine}</p>
                        <DishQuantityButtonComponent dish={dish}/>
                      </div>
                    </div>              
                  </div>
                );
              })}
            </div>
            <div className='w-1/2 fixed right-0'>
              <DeliveryFormComponent onSubmitCallback={confirmDelivery}/>
            </div>
          </div>
        ) : (
          <div className='block max-w-7xl'>
            <p className='text-grey text-2xl text-center font-semibold mb-10'>Votre panier est vide.</p>
            <DishSliderComponent />
          </div>
        )
      ) : (
        <DeliveryConfirmedComponent deliveryData={deliveryData} />
      )}
    </div>
  )
}

export default OrderPage