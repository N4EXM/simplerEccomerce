import React from 'react'

const TextAreaInput = ({ type, onChange, value, name, placeholder, extraInfo, isRequired }) => {
    return (
        <div
            className='flex flex-col gap-1 w-full h-fit'
        >
            <label  
                htmlFor="textAreaInput"
                className='text-sm font-medium text-gray dark:text-white pl-0.5 flex-row flex'
            >
                {name}
                <span
                    className={isRequired ? 'flex text-rose-500' : 'hidden'}
                >
                    *
                </span>
            </label>
            <textarea
                id='textAreaInput' 
                type={type}
                onChange={onChange}
                value={value}
                required={isRequired}
                placeholder={placeholder}
                className='text-sm p-2 rounded pl-3 bg-white dark:bg-white/5 border-2 border-gray/40 w-full h-fit dark:text-white outline-none dark:border-white/40 min-h-32 resize-none'
            ></textarea>
            <p
                className='text-xs text-gray/50 dark:text-white/40 font-medium pl-0.5'
            >
                {extraInfo}
            </p>
        </div>
    )
}

export default TextAreaInput