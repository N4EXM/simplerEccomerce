import React, { useState } from 'react'

const ToggleBtn = ({ icon, name, ftn, toggle}) => {

    const [currentToggle, setCurrentToggle] = useState(toggle)

    const handleToggle = () => {
        ftn()
        setCurrentToggle(!currentToggle)
    }

    return (
        <div
            className='flex flex-row items-center justify-between w-full h-fit bg-white dark:bg-white/10 p-2 rounded shadow'
        >
            <div
                className='flex flex-row items-center gap-2 w-fit h-fit'
            >
                <i
                    className='p-2 w-fit h-fit bg-green/20 dark:bg-green dark:text-white text-darkGreen rounded'
                >
                    {icon}
                </i>
                <p
                    className='text-sm font-medium text-gray dark:text-white/80'
                >
                    {name}
                </p>
            </div>
            <button
                onClick={() => handleToggle()}
                className={`
                    relative inline-flex h-5 w-11 items-center rounded-full
                    transition-all duration-300 ease-in-out
                    focus:outline-none cursor-pointer
                    ${currentToggle === true 
                    ? 'dark:bg-green bg-darkGreen' 
                    : 'bg-gray dark:bg-black'
                }
                `}            
            >
                {/* Thumb */}
                <span
                    className={`
                        h-3 w-3 transform rounded-full bg-white shadow-lg
                        transition-all duration-300 ease-in-out
                        flex items-center justify-center
                        ${currentToggle === true ? 'translate-x-7' : 'translate-x-1'}
                    `}
                >
                </span>
            </button>
        </div>
    )
}

export default ToggleBtn