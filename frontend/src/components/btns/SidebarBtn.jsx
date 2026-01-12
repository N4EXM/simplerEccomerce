import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SidebarBtn = ({ name, icon, location }) => {

    const currentLocation = useLocation()

    return (
        <Link
            className={`flex flex-row items-center gap-2 font-medium font-poppins p-2 duration-200 dark:text-white  rounded ${`/${location}` === currentLocation.pathname ? 'bg-darkGreen dark:bg-green text-white' : 'hover:bg-black/20 dark:hover:bg-white/10 text-darkGreen'}`}
            to={`/${location}`}
        >
            {icon}
            {name}
        </Link>
    )
}

export default SidebarBtn