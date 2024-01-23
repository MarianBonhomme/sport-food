import React from "react";

function ButtonComponent(props) {
  const text = props.text;
  const color = props.color;
  const size = props.size ? props.size : 'base';
  const customStyle = props.customStyle ? props.customStyle : false

  const style = `${customStyle ? customStyle : ''} bg-${color} text-${size} ${size !== 'base' ? 'px-4 py-2' : 'px-6 py-3'}`

  return <button className={`rounded-3xl text-white text-nowrap ${style}`}>{text}</button>;
}

export default ButtonComponent;
