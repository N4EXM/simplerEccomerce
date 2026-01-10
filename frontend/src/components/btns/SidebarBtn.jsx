import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SidebarBtn = ({ name, icon, location }) => {

    const currentLocation = useLocation()

    useEffect(() => {
        console.log(currentLocation)
    }, [currentLocation])

    return (
        <Link
            className={`flex flex-row items-center gap-2 text-lg font-medium font-poppins p-2 rounded ${`/${location}` === currentLocation.pathname ? 'bg-darkGreen dark:bg-green' : 'bg-black'}`}
            to={`/${location}`}
        >
            {icon}
            {name}
        </Link>
    )
}

export default SidebarBtn