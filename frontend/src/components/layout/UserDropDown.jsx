import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import DropDownBtn from '../btns/DropDownBtn'
import Separator from './Separator'
import UserSubDetails from './UserSubDetails'
import DarkModeToggle from '../btns/DarkModeToggle'

const UserDropDown = () => {
    
    // context
    const { user } = useAuth() 

    // toggles
    const [tglDropDown, setTglDropDown] = useState(false)
    
    const defaultBtns = [
        {
            location: 'Login',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="m16 12-6-5v4H3v2h7v4z"></path><path d="M19 3h-7v2h7v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path></svg>
        },
        {
            location: 'Register',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 19V5h14v14z"></path><path d="M8.5 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M11 11h6v2h-6zM7 7h10v2H7zM7 15h10v2H7z"></path></svg>
        }
    ]

    const userBtns = [
        {
            location: 'Dashboard',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="M20 3h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1 8h-4V5h4zM10 3H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1M9 7H5V5h4zM20 15h-6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-1 4h-4v-2h4zM10 11H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1m-1 8H5v-6h4z"></path></svg>
        },
        {
            location: 'Ordered',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="M19.1 7.8c-.38-.5-.97-.8-1.6-.8H15V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2 0 1.65 1.35 3 3 3s3-1.35 3-3h4c0 1.65 1.35 3 3 3s3-1.35 3-3c1.1 0 2-.9 2-2v-3.67c0-.43-.14-.86-.4-1.2zM17.5 9l1.5 2h-4V9zM7 19a1.003 1.003 0 0 1-.87-1.5c.37-.63 1.36-.63 1.73 0 .09.15.13.32.13.49 0 .55-.45 1-1 1Zm2.23-3s-.05-.05-.08-.07c-.06-.06-.12-.11-.17-.16-.12-.11-.25-.21-.38-.29a2.882 2.882 0 0 0-.67-.32c-.07-.02-.14-.05-.21-.07Q7.375 15 7 15c-.375 0-.49.04-.72.09-.07.02-.14.05-.21.07-.16.05-.31.11-.45.19-.07.04-.15.08-.22.13-.13.09-.26.18-.38.29-.06.05-.12.1-.18.16-.02.03-.05.04-.08.07h-.77V6h9v10H9.22ZM17 19a1.003 1.003 0 0 1-.87-1.5c.37-.63 1.36-.63 1.73 0 .09.15.13.32.13.49 0 .55-.45 1-1 1Zm3-3h-.77s-.05-.05-.08-.07c-.06-.06-.12-.11-.17-.16-.12-.11-.25-.21-.38-.29a2.882 2.882 0 0 0-.67-.32c-.07-.02-.14-.05-.21-.07Q17.375 15 17 15c-.375 0-.47.04-.7.09-.06.01-.12.03-.18.05-.18.06-.36.13-.52.22l-.12.06c-.17.1-.33.21-.48.35v-2.76h5v3Z"></path></svg>
        },
    ]

    return (
        <div
            className='relative w-fit h-fit flex'
        >

            {/* tgl button */}
            <button
                className='p-1 rounded-md duration-200 dark:text-white dark:hover:bg-green hover:bg-darkGreen hover:text-white'
                onClick={() => setTglDropDown(!tglDropDown)}
            >
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path></svg>
            </button>
            <div
                className={`${tglDropDown ? 'flex' : 'hidden'} ${user === null ? 'w-64 h-fit' : 'w-64 h-fit'}  bg-white dark:bg-black absolute top-16 -right-10 shadow shadow-black/50 dark:shadow-gray/20 rounded-md`}
            >
                {
                    user === null
                    ?   <div
                            className='flex flex-col w-full h-full'
                        >
                            {/* login/register btn */}
                            <div
                                className='flex flex-col w-full h-fit p-1'
                            >
                                {
                                    defaultBtns.map((btn, index) => (
                                        <DropDownBtn
                                            key={index}
                                            icon={btn.icon}
                                            location={btn.location}
                                            index={index}
                                            btnLength={defaultBtns.length}
                                        />
                                    ))
                                }
                            </div>

                            <Separator/>

                            <DarkModeToggle/>

                        </div>
                    :   <div
                            className='flex flex-col w-full h-full'
                        >

                            <div
                                className='p-1 w-full h-fit'
                            >
                                <UserSubDetails/>
                            </div>

                            <Separator/>

                            <div
                                className='p-1 w-full h-fit'
                            >
                                {
                                    userBtns.map((btn, index) => (
                                        <DropDownBtn
                                            key={index}
                                            icon={btn.icon}
                                            location={btn.location}
                                            index={index}
                                            btnLength={defaultBtns.length}
                                        />
                                    ))
                                }
                            </div>

                            <Separator/>

                            <div
                                className='p-1 w-full h-fit'
                            >
                                <DarkModeToggle/>
                            </div>

                        </div>
                }
            </div>
        </div>
    )
}

export default UserDropDown