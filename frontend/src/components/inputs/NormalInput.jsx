import React from 'react'

const NormalInput = ({ type, onChange, value, name, placeholder, isRequired, extraInfo }) => {
    return (
        <div
            className='flex flex-col gap-1 w-full h-fit'
        >
            <label  
                htmlFor="normalInput"
                className='text-sm font-medium text-gray dark:text-white pl-0.5 flex flex-row'
            >
                {name}
                <span
                    className={isRequired ? 'flex text-rose-500' : 'hidden'}
                >
                    *
                </span>
            </label>
            <input
                id='normalINput' 
                type={type}
                onChange={onChange}
                value={value}
                required={isRequired}
                placeholder={placeholder}
                className='text-sm p-2 rounded pl-3 bg-white dark:bg-white/5 border-2 border-gray/40 w-full h-fit dark:text-white outline-none dark:border-white/40 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]'
            />
            <p
                className='text-xs text-gray/50 dark:text-white/40 font-medium pl-0.5'
            >
                {extraInfo}
            </p>
        </div>
    )
}

export default NormalInput