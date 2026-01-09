import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div
      className='w-full h-screen max-h-screen bg-white dark:bg-black font-montserrat grid grid-cols-12 grid-rows-12 relative'
    >
      <Navbar/>
      {children}
      <div className='bg-darkGreen dark:bg-green w-full h-80 absolute top-0 left-0'></div>
    </div>
  )
}

export default Layout