import React from 'react'

const NormalInput = ({ type, onChange, value, inputName, placeholder }) => {
    return (
        <div
            className='flex flex-col gap-1 w-full h-fit'
        >
            <label  
                htmlFor="normalInput"
                className='text-sm font-medium text-gray dark:text-white/70 pl-0.5'
            >
                {inputName}
            </label>
            <input
                id='normalINput' 
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className='text-sm p-2 rounded pl-3 bg-white dark:bg-black/20 border-2 border-gray/40 w-full h-fit dark:text-white outline-none dark:border-white/40'
            />
        </div>
    )
}

export default NormalInput