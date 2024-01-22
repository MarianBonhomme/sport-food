import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";

function DeliveryFormComponent({ onSubmitCallback }) {
  const [formData, setFormData] = useState({
    fullName: "",
    deliveryAddress: "",
    phoneNumber: "",
    specialInstructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitCallback(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg flex flex-col">
      <h2 className="text-3xl text-center font-semibold mb-10">
        Informations de livraison
      </h2>
      <div className="w-full flex justify-between">
        <div>
          <label>Nom complet</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="rounded-2xl shadow-custom mt-2 mb-5 px-4 py-2"
          />
        </div>
        <div className="flex flex-col items-end">
          <label className="w-full text-start">Numéro de téléphone</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="rounded-2xl shadow-custom mt-2 mb-5 px-4 py-2"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label>Adresse de livraison</label>
        <textarea
          name="deliveryAddress"
          value={formData.deliveryAddress}
          onChange={handleChange}
          required
          className="rounded-2xl shadow-custom mt-2 mb-5 px-4 py-2"
        />
      </div>
      <div className="flex flex-col">
        <label>Instructions spéciales</label>
        <textarea
          name="specialInstructions"
          value={formData.specialInstructions}
          onChange={handleChange}
          className="rounded-2xl shadow-custom mt-2 mb-5 px-4 py-2"
        />
      </div>
      <button type="submit">
        <ButtonComponent text="Valider la commande" color="blue" />
      </button>
    </form>
  );
}

export default DeliveryFormComponent;
