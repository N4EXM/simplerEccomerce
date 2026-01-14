import React from 'react'

const TextAreaInput = ({ type, onChange, value, inputName, placeholder }) => {
    return (
        <div
            className='flex flex-col gap-1 w-full h-fit'
        >
            <label  
                htmlFor="textAreaInput"
                className='text-sm font-medium text-gray dark:text-white/70 pl-0.5'
            >
                {inputName}
            </label>
            <textarea
                id='textAreaInput' 
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className='text-sm p-2 rounded pl-3 bg-white dark:bg-black/20 border-2 border-gray/40 w-full h-fit dark:text-white outline-none dark:border-white/40 min-h-20 resize-none'
            ></textarea>
        </div>
    )
}

export default TextAreaInput