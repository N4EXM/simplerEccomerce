import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div
      className='flex items-end justify-center col-span-12 row-span-2 w-full h-full p-7 z-10 px-20'
    >
      
      <div
        className='flex flex-row items-center justify-between w-full h-full bg-white dark:bg-black rounded-md shadow-md shadow-slate-800 px-10'
      >
        <Link
          to={'/'}
          className='flex flex-row items-center text-black dark:text-white gap-3 text-2xl font-semibold font-poppins'
        >
          <i
            className='p-1 rounded-md bg-darkGreen dark:bg-white text-darkGreen'
          >
            <svg  xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.7 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M2.21 9.39c-.19.25-.25.57-.17.87l2.8 10.26c.24.87 1.03 1.47 1.93 1.47h10.47c.9 0 1.69-.61 1.93-1.47l2.8-10.26c.08-.3.02-.62-.17-.87a.99.99 0 0 0-.79-.39h-1.42l-3.71-6.5-1.74.99 3.15 5.5H6.72l3.15-5.5-1.74-.99L4.42 9H3a1 1 0 0 0-.79.39M17.24 20H6.76l-2.45-9h15.38z"></path><path d="M9 13h2v5H9zm4 0h2v5h-2z"></path></svg>
          </i>
          ReactShop
        </Link>

      </div>


    </div>
  )
}

export default Navbar