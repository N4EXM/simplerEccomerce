import React from 'react'
import { Link } from 'react-router-dom'

const NavBtn = ({ icon, location }) => {
  return (
    <Link
        className='p-1 rounded-md duration-200 dark:text-white dark:hover:bg-green hover:bg-darkGreen hover:text-white '
        to={`/${location}`}
    >
        {icon}
    </Link>
  )
}

export default NavBtn