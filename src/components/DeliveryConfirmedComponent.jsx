import React from "react";

function DeliveryConfirmedComponent(props) {
  const deliveryData = props.deliveryData;
  
  return (
    <div className="flex flex-col">
      <h3 className="text-3xl font-semibold mb-10">
        Votre commande est en route !
      </h3>
      <p>{deliveryData.fullName}</p>
      <p>{deliveryData.phoneNumber}</p>
      <p>{deliveryData.deliveryAddress}</p>
      <p>{deliveryData && deliveryData.specialInstructions}</p>
    </div>
  );
}

export default DeliveryConfirmedComponent;
