import React from 'react'
import { NavLink } from 'react-router-dom';
import ButtonComponent from '../../components/ButtonComponent';

// TODO: ajouter des sections expliquant chaque point (calories / healthy etc)
function PresentationPage() {
  return (
    <div className='flex flex-col items-center'>
      <div className="w-full h-screen relative bg-cwhite">
        <div className='w-1/2 h-full relative flex flex-col justify-center pl-32 z-10'>
          <h1 className='text-8xl font-lora font-bold mb-5 text-nowrap'>SPORT FOOD</h1>
          <p className='text-xl text-justify mb-8'>Découvrez le plaisir d'une cuisine saine et sportive chez nous. Nos plats délicieux, riches en saveur et en nutriments, sont conçus pour les amateurs de bien-être et de sport. Rejoignez-nous pour une expérience culinaire qui nourrit votre corps et votre esprit. Bienvenue chez Sport Food!</p>
          <div className='flex gap-5'>
            <NavLink to={"/menu"} >
              <ButtonComponent text="Découvrir la carte" color="green"/>
            </NavLink>
            <NavLink to={"/localisation"} >
              <ButtonComponent text="Nous rendre visite" color="orange"/>
            </NavLink>
          </div>
        </div>
        <img src="src/assets/img/headline-ver.jpg" className='absolute bottom-0 right-0 h-full'/>
      </div>
      <div className="w-full flex justify-center items-center mt-20">
        <img src="src/assets/img/dish.png" className='w-3/12'/>
        <div className='w-1/2 h-full relative flex flex-col justify-center pl-32 z-10'>
          <h2 className='text-6xl font-lora font-bold mb-5 text-nowrap'>Healthy Food</h2>
          <p className='text-justify'>À destination des amateurs de sport cherchant à maintenir leur bien-être, notre restaurant se distingue par une offre culinaire dédiée. Chaque plat, équilibré et savoureux, est minutieusement conçu pour répondre aux exigences d'une clientèle active en quête d'une alimentation saine et délicieuse.</p>
          <div className='flex gap-5 mt-6'>
            <NavLink to={"/menu"} >
              <ButtonComponent text="Je commande" color="green"/>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mb-20">
        <div className='w-7/12 h-full relative flex flex-col justify-center pl-32 z-10'>
          <h2 className='text-6xl font-lora font-bold mb-5 text-nowrap'>Tracking des Nutriments</h2>
          <p className='text-justify mb-3'>Nous sommes conscients de l'importance d'une alimentation rigoureuse. C'est pourquoi nous détaillons la composition en macronutriments de chacun de nos plats. <span className='text-orange font-medium'>Protéines, glucides, lipides...</span> aucune information ne vous échappera.</p>
          <p className='text-justify'>Avec Sport Food, adopter une alimentation saine au quotidien devient une démarche aisée ! Vous pourrez ainsi poursuivre votre régime en toute simplicité grâce à notre engagement à vous offrir une transparence totale sur la composition de nos repas.</p>
          <div className='flex gap-5 mt-6'>
            <NavLink to={"/menu"} >
              <ButtonComponent text="C'est pour moi" color="orange"/>
            </NavLink>
          </div>
        </div>
        <img src="src/assets/img/pyramid.jpg" className='w-1/3 max-w-xl'/>
      </div>
    </div>
  )
}

export default PresentationPage