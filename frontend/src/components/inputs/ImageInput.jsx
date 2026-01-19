import React, { useState, useRef, useEffect } from 'react'

const ImageInput = ({ handleImages }) => {
    
    const fileInputRef = useRef(null)

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        handleImages(file)
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <div
            className='flex flex-col w-40 h-40 border-gray/50 dark:border-white/50 border-2 border-dashed rounded-md relative '
        >
            <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                className='hidden'
            />
            <button
                className='w-full h-full relative cursor-pointer'
                onClick={triggerFileInput}
            >
                <svg className='text-gray dark:text-white/50 absolute top-1/2 left-1/2 -translate-1/2' xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill={"currentColor"} viewBox="0 0 24 24"><path d="m12 12-1-1-2 3h10l-4-6z"></path><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 16V4h12v12z"></path><path d="M4 8H2v12c0 1.1.9 2 2 2h12v-2H4z"></path></svg>
                <svg className='absolute top-1/2 right-3/10 bg-darkGreen dark:bg-green text-white p-1 rounded-full' xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={"currentColor"} viewBox="0 0 24 24"><path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path></svg>
            </button>
        </div>
    )
}

export default ImageInput