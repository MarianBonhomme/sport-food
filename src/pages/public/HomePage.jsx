import React from 'react'
import { NavLink } from 'react-router-dom';
import DishSliderComponent from './../../components/Dish/DishSliderComponent';

function HomePage() {
  return (
    <div className="min-h-full p-10">
      <div className='max-w-7xl mx-auto mb-20'>
        <h2 className='font-lora text-6xl font-bold text-center mb-10'>Nos suggestions</h2>
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
          <NavLink to={"/list"}>Liste des plats</NavLink>
          <NavLink to={"/add"}>Ajouter des plats</NavLink>
        </div>
      </div>
    </div>
  )
}

export default HomePage