import React from 'react'
import { Link } from 'react-router-dom'

const DropDownBtn = ({icon, location,}) => {
  return (
    <Link
        className={`w-full h-fit p-2 hover:bg-gray/15 dar:hover:bg-gray duration-200 flex flex-row items-center gap-2 font-poppins text-darkGreen dark:text-green dark:hover:text-white dark:hover:bg-green text-sm rounded`}
        to={`/${location}`}
    >
        {icon}
        <span
            className='text-black/80 dark:text-white/90 dark:hover:text-white font-medium'
        >
            {location}
        </span>
    </Link>
  )
}

export default DropDownBtn