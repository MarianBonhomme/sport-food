import React, { useState } from "react";
import DeliveryConfirmedComponent from "../../components/Delivery/DeliveryConfirmedComponent";
import DishSliderComponent from "../../components/Dish/DishSliderComponent";
import { useOrder } from "../../context/orderContext";
import DeliveryFormComponent from './../../components/Delivery/DeliveryFormComponent';
import DishForOrderPageComponent from './../../components/Dish/DishForOrderPageComponent';

function OrderPage() {
  const { currentOrder, currentOrderPrice, addToHistorical } = useOrder();
  const [confirmed, setConfirmed] = useState(false);
  const [deliveryData, setDeliveryData] = useState();

  const confirmDelivery = (formData) => {
    setConfirmed(true);
    setDeliveryData(formData);
    addToHistorical();
  };
  return (
    <div className="w-full flex justify-center items-center p-10">
      {!confirmed ? (
        currentOrder && currentOrder.length > 0 ? (
          <div className="w-full flex">
            <div className="w-1/2">
              <p className='ml-5 mb-5 text-xl font-semibold'>Total: {currentOrderPrice.toFixed(2)}€</p>
              {currentOrder.map((dish, index) => {
                return <DishForOrderPageComponent key={index} dish={dish} />;
              })}
            </div>
            <div className="w-1/2 fixed right-0 mt-10">
              <DeliveryFormComponent onSubmitCallback={confirmDelivery} />
            </div>
          </div>
        ) : (
          <div className="block max-w-7xl">
            <p className="text-grey text-2xl text-center font-semibold mb-10">
              Votre panier est vide.
            </p>
            <DishSliderComponent />
          </div>
        )
      ) : (
        <DeliveryConfirmedComponent deliveryData={deliveryData} />
      )}
    </div>
  );
}

export default OrderPage;
