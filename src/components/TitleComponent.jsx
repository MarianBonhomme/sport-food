import React from 'react'

function TitleComponent(props) {
  return (
	<h2 className='text-black font-lora text-6xl font-bold text-center text-nowrap mb-10'>{props.text}</h2>
  )
}

export default TitleComponent