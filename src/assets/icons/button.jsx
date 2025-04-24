import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`${className} border-0 w-fit outline-0 font-bold font-mono px-6 py-2 rounded-full`}>{text}</button>
  )
}

export default Button