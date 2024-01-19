import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
	<footer className='absolute bottom-0 w-full h-[70px] flex justify-between items-center bg-blue-600 text-white px-10'>
		<div>© Sport Food - 2024</div>
		<NavLink to={"/connexion"}>Administration</NavLink>
	</footer>

  )
}

export default Footer