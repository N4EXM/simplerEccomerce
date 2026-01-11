import React from 'react'
import Sidebar from './Sidebar'

const DashboardLayout = ({ children }) => {
    return (
        <div
            className='w-full h-screen max-h-screen grid grid-cols-10 grid-rows-12 bg-white font-poppins'
        >
            <Sidebar/>
            <div
                className='col-span-7 row-span-12 w-full h-full dark:bg-black/95 grid grid-cols-12 grid-rows-12 p-5 py-4'
            >
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout