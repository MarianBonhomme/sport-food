import React from 'react'
import { NavLink } from 'react-router-dom';

// TODO: ajouter des sections expliquant chaque point (calories / healthy etc)
function PresentationPage() {
  return (
    <div className="h-[90dvh] w-full relative bg-cwhite">
      <div className='w-1/2 h-full relative flex flex-col justify-center pl-32 z-10'>
        <h1 className='text-8xl font-lora font-bold mb-5'>SPORT FOOD</h1>
        <p className='text-xl text-justify mb-8'>Découvrez le plaisir d'une cuisine saine et sportive chez nous. Nos plats délicieux, riches en saveur et en nutriments, sont conçus pour les amateurs de bien-être et de sport. Rejoignez-nous pour une expérience culinaire qui nourrit votre corps et votre esprit. Bienvenue chez Sport Food!</p>
        <div className='flex gap-5'>
          <NavLink to={"/carte"} >
            <button className='bg-green text-white px-6 py-3 rounded-3xl'>Découvrir la carte</button>
          </NavLink>
          <NavLink to={"/localisation"} >
            <button className='bg-orange text-white px-6 py-3 rounded-3xl'>Nous rendre visite</button>
          </NavLink>
        </div>
      </div>
      <img src="src/assets/img/headline-ver.jpg" className='absolute bottom-0 right-0 h-full' />
    </div>
  )
}

export default PresentationPage