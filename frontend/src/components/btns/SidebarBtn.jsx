import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SidebarBtn = ({ name, icon, location }) => {

    const currentLocation = useLocation()

    return (
        <Link
            className={`flex flex-row items-center gap-2 font-medium font-poppins p-2 duration-200 rounded ${`/${location}` === currentLocation.pathname ? 'bg-darkGreen dark:bg-green' : 'bg-black hover:bg-white/10 '}`}
            to={`/${location}`}
        >
            {icon}
            {name}
        </Link>
    )
}

export default SidebarBtn