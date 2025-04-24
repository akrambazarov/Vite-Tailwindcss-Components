import React from 'react'

const PremiunCard = ({text,desc,icon}) => {
  return (
    <div className="flex flex-col items-center">
        {icon}
        <div className="text-center">
        <h2 className="text-2xl font-bold">
        {text}
        </h2>
        <span>
       {desc}
        </span>
        </div>
    </div>
  )
}

export default PremiunCard