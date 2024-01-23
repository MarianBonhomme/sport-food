import React from "react";
import TitleComponent from './../../components/TitleComponent';

function LocalisationPage() {
  return (

    <div className="flex flex-col justify-between p-10">
      <TitleComponent text={"On attend votre visite!"} />
      <div className="flex justify-center items-center">
        <div className="w-1/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51870596.56745394!2d-40.28698029444197!3d37.485979003860415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838db23a7969d%3A0xf8152979342cc024!2sSPORTFOOD!5e0!3m2!1sfr!2sfr!4v1705828087190!5m2!1sfr!2sfr"
            className="rounded-2xl shadow-custom "
            width="400"
            height="400"
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-1/3 relative">
          <ul className="flex flex-col gap-5 text-xl select-text">
            <li><span className="font-bold mr-3">Téléphone:</span>06 00 00 00 00</li>
            <li><span className="font-bold mr-3">Email:</span>sportfood@gmail.com</li>
            <li><span className="font-bold mr-3">Adresse:</span>Leof. Kon/nou Karamanli 125, Thessaloniki 542 49, Grèce</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LocalisationPage;
