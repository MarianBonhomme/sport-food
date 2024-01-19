import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
	<div className='w-full h-[70px] flex justify-between items-center bg-blue-600 text-white px-10 text-lg'>
		<NavLink to={"/"} ><span className='text-3xl'>🏠</span></NavLink>
		<nav className='flex gap-5'>
			<NavLink to={"/presentation"} >Présentation</NavLink>
			<NavLink to={"/carte"} >Carte</NavLink>
			<NavLink to={"/localisation"} >Localisation</NavLink>
		</nav>
	</div>
  )
}

export default Header