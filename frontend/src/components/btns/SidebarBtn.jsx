import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SidebarBtn = ({ name, icon, location }) => {

    const currentLocation = useLocation()

    return (
        <Link
            className={`flex flex-row items-center gap-2 font-medium font-poppins p-2 duration-200 text-black dark:text-white  rounded ${currentLocation.pathname.includes(location) ? 'bg-darkGreen dark:bg-green text-white' : 'hover:bg-black/20 dark:hover:bg-white/10'}`}
            to={`/${location}`}
        >
            <i
                className={`${currentLocation.pathname.includes(location) ? 'text-white' : 'text-darkGreen dark:text-green'}`}
            >
                {icon}
            </i>
            {name}
        </Link>
    )
}

export default SidebarBtn