import React from 'react'
import { Link } from 'react-router-dom'

const DropDownBtn = ({icon, location, name}) => {
  return (
    <Link
        className={`w-full h-fit p-2 hover:bg-gray/15 dark:hover:bg-white/10 duration-200 flex flex-row items-center gap-2 font-poppins text-darkGreen dark:text-green green text-sm rounded`}
        to={`/${location}`}
    >
        {icon}
        <span
            className='text-black/80 dark:text-white/90  font-medium'
        >
            {name}
        </span>
    </Link>
  )
}

export default DropDownBtn