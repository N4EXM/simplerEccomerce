import React from 'react'
import { Link } from 'react-router-dom'
import NavBtn from '../btns/NavBtn'
import UserDropDown from './UserDropDown'

const Navbar = () => {

  const navButtons = [
    {
      location: 'Wishlist',
      icon: <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"><path d="M11.29 20.66c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41-2.3-2.28-5.85-2.35-8.21-.2-2.36-2.15-5.91-2.09-8.21.2-2.35 2.36-2.35 6.06 0 8.41zM5.21 6.16C6 5.38 7 4.99 8.01 4.99s2.01.39 2.79 1.17l.5.5c.39.39 1.02.39 1.41 0l.5-.5c1.56-1.56 4.02-1.56 5.59 0 1.56 1.57 1.56 4.02 0 5.58l-6.79 6.79-6.79-6.79a3.91 3.91 0 0 1 0-5.58Z"></path></svg>
    },
    {
      location: 'Cart',
      icon: <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"><path d="M21 6H7.05L5.94 2.68A1 1 0 0 0 4.99 2h-3v2h2.28l3.54 10.63A2 2 0 0 0 9.71 16h7.59a2 2 0 0 0 1.87-1.3l2.76-7.35c.11-.31.07-.65-.11-.92A1 1 0 0 0 21 6m-3.69 8H9.72l-2-6h11.84zM10 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4M17 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path></svg>
    },
  ]

  return (
    <div
      className='flex items-end justify-center col-span-12 row-span-2 w-full h-full p-7 z-10 px-20'
    >
      
      <div
        className='flex flex-row items-center justify-between w-full h-full bg-white dark:bg-black rounded-md shadow-md shadow-slate-800 px-10'
      >
        
        {/* logo button */}
        <Link
          to={'/'}
          className='flex flex-row items-center text-darkGreen dark:text-white  gap-3 text-2xl font-semibold font-poppins'
        >
          <i
            className='p-1 rounded-md bg-darkGreen text-white dark:bg-green'
          >
            <svg  xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={"currentColor"} viewBox="0 0 24 24"><path d="M2.21 9.39c-.19.25-.25.57-.17.87l2.8 10.26c.24.87 1.03 1.47 1.93 1.47h10.47c.9 0 1.69-.61 1.93-1.47l2.8-10.26c.08-.3.02-.62-.17-.87a.99.99 0 0 0-.79-.39h-1.42l-3.71-6.5-1.74.99 3.15 5.5H6.72l3.15-5.5-1.74-.99L4.42 9H3a1 1 0 0 0-.79.39M13 13h2v5h-2zm-4 0h2v5H9z"></path></svg>
          </i>
          ReactShop
        </Link>

        {/* nav buttons */}
        <div
          className='flex flex-row items-center gap-2 w-fit h-fit'
        >
          {
            navButtons.map((btn) => (
              <NavBtn
                key={btn.location}
                location={btn.location}
                icon={btn.icon}
              />
            ))
          }
          <UserDropDown/>
        </div>


      </div>


    </div>
  )
}

export default Navbar