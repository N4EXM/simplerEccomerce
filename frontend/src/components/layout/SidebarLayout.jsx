import React from 'react'
import Sidebar from './Sidebar'

const SidebarLayout = ({ children }) => {
    return (
        <div
        className='w-full h-screen max-h-screen grid grid-cols-12 grid-rows-12 bg-white dark:bg-black'
        >
            <Sidebar/>
            {children}
        </div>
    )
}

export default SidebarLayout