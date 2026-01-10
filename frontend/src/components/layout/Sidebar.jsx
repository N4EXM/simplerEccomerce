import React from 'react'
import SidebarBtn from '../btns/SidebarBtn'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'

const Sidebar = () => {

  // context
  const { logout } = useAuth()
  const { toggleDarkMode, theme } = useTheme()

  const sidebarBtns = [
    {
      name: 'Dashboard',
      location: 'user/Dashboard',
      icon: <svg  xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill={"currentColor"} viewBox="0 0 24 24"><path d="M20 3h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1 8h-4V5h4zM10 3H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1M9 7H5V5h4zM20 15h-6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-1 4h-4v-2h4zM10 11H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1m-1 8H5v-6h4z"></path></svg>
    },
    {
      name: 'Your products',
      location: 'user/products',
      icon: <svg  xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill={"currentColor"} viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 20V4h12v16z"></path><path d="M8 12h8v2H8zM8 16h8v2H8zM8 6h4v4H8z"></path></svg>
    },
    {
      name: 'Profile',
      location: 'user/profile',
      icon: <svg  xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill={"currentColor"} viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path></svg>
    }
  ]

  return (
    <div
      className='w-full h-full col-span-4 row-span-12 bg-black text-white p-5 px-7'
    >
      
      {/* logo button */}
      <div
        className='flex flex-row items-center justify-between w-full h-fit'
      >
        <Link
          to={'/'}
          className='flex flex-row items-center gap-3 text-2xl font-semibold font-poppins'
        >
          <i
            className='p-1 rounded-md bg-darkGreen text-white dark:bg-green'
          >
            <svg  xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"currentColor"} viewBox="0 0 24 24"><path d="M2.21 9.39c-.19.25-.25.57-.17.87l2.8 10.26c.24.87 1.03 1.47 1.93 1.47h10.47c.9 0 1.69-.61 1.93-1.47l2.8-10.26c.08-.3.02-.62-.17-.87a.99.99 0 0 0-.79-.39h-1.42l-3.71-6.5-1.74.99 3.15 5.5H6.72l3.15-5.5-1.74-.99L4.42 9H3a1 1 0 0 0-.79.39M13 13h2v5h-2zm-4 0h2v5H9z"></path></svg>
          </i>
          ReactShop
        </Link>
        {/* toggle theme btn */}
        <button
          className=' dark:bg-white bg-black p-2 rounded-full text-darkGreen dark:text-green z-20'
          onClick={() => toggleDarkMode()}
        >
          {
            theme === 'light'
              ? <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"><path d="M12 17.01c2.76 0 5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12s2.25 5.01 5.01 5.01M12 9c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01-3.01-1.35-3.01-3.01S10.34 9 12 9M13 19h-2v3h2v-3M13 2h-2v3h2V2M2 11h3v2H2zM19 11h3v2h-3zM4.22 18.36l.71.71.71.71 1.06-1.06 1.06-1.06-.71-.71-.71-.71-1.06 1.06zM19.78 5.64l-.71-.71-.71-.71-1.06 1.06-1.06 1.06.71.71.71.71 1.06-1.06zM7.76 6.34 6.7 5.28 5.64 4.22l-.71.71-.71.71L5.28 6.7l1.06 1.06.71-.71zM16.24 17.66l1.06 1.06 1.06 1.06.71-.71.71-.71-1.06-1.06-1.06-1.06-.71.71z"></path></svg>
              : <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"><path d="m20.71,13.51c-.78.23-1.58.35-2.38.35-4.52,0-8.2-3.68-8.2-8.2,0-.8.12-1.6.35-2.38.11-.35.01-.74-.25-1-.26-.26-.64-.36-1-.25C4.91,3.35,2,7.28,2,11.8c0,5.62,4.57,10.2,10.2,10.2,4.53,0,8.45-2.91,9.76-7.24.11-.35.01-.74-.25-1s-.64-.36-1-.25Zm-8.51,6.49c-4.52,0-8.2-3.68-8.2-8.2,0-3.03,1.63-5.73,4.18-7.15-.03.34-.05.68-.05,1.02,0,5.62,4.57,10.2,10.2,10.2.34,0,.68-.02,1.02-.05-1.42,2.56-4.12,4.18-7.15,4.18Z"></path><path d="M18 2 16.75 4.75 14 6 16.75 7.25 18 10 19.25 7.25 22 6 19.25 4.75 18 2z"></path></svg>
          }
        </button>
      </div>


      {/* nav buttons */}
      <div
        className='flex flex-col gap-3 pt-40'
      >
        {
          sidebarBtns.map((btn) => (
            <SidebarBtn
              name={btn.name}
              location={btn.location}
              icon={btn.icon}
            />
          ))
        }
      </div>


    </div>
  )
}

export default Sidebar