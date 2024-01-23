import React from 'react'

function BadgeComponent({boolean, textTrue, textFalse}) {
  return (
	boolean ? (
		<span className="inline-flex items-center rounded-xl bg-green text-white px-2 py-1 text-xs">{textTrue}</span>
	) : (
		<span className="inline-flex items-center rounded-xl bg-red text-white px-2 py-1 text-xs">{textFalse}</span>
	)
  )
}

export default BadgeComponent