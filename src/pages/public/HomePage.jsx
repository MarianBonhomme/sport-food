import React from 'react'
import { NavLink } from 'react-router-dom';
import DishSliderComponent from './../../components/Dish/DishSliderComponent';
import TitleComponent from './../../components/TitleComponent';

function HomePage() {
  return (
    <div className="min-h-full p-10">
      <div className='max-w-7xl mx-auto mb-20'>
        <TitleComponent text={"Nos suggestions"} />
        <DishSliderComponent />
      </div>
      <div className="max-w-7xl mx-auto flex justify-evenly mt-[20dvh]">
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold text-blue mb-3'>Informations</h3>
          <NavLink>Accueil</NavLink>
          <NavLink to={"/presentation"}>Présentation</NavLink>
          <NavLink to={"/menu"}>Carte</NavLink>
          <NavLink to={"/localisation"}>Localisation</NavLink>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold text-blue mb-3'>Commande</h3>
          <NavLink to={"/order"}>Panier</NavLink>
          <NavLink to={"/historical"}>Historique des commandes</NavLink>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold text-blue mb-3'>Administration</h3>
          <NavLink to={"/auth"}>Connexion</NavLink>
          <NavLink to={"/private/list"}>Liste des plats</NavLink>
          <NavLink to={"/private/add"}>Ajouter des plats</NavLink>
        </div>
      </div>
    </div>
  )
}

export default HomePage