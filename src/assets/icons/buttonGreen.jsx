import React from 'react'

const buttonGreen = ({text}) => {
  return (
    <button className='text-white py-2 px-6 w-fit rounded-md font-semibold bg-teal-400 hover:bg-teal-500 transition-all'>{text}</button>
  )
}

export default buttonGreen