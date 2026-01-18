import React from 'react'

const ImageCard = ({ imageUrl, name, handleImages }) => {
    return (
        <div
            className='w-28 h-28 max-h-28 max-w-28 relative'
        >
            <img    
                src={imageUrl} 
                className='w-full h-full rounded-md'
                alt="" 
            />
            <button
                className='absolute top-1 right-1 bg-rose-500/40 rounded-full p-1 hover:bg-rose-600 text-white duration-200 cursor-pointer'
                onClick={handleImages}
            >
                <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24"><path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path></svg>
            </button>
            <p
                className='absolute bottom-1 left-1 w-26 p-1 text-xs rounded bg-black/50 text-white font-medium'
            >
                {name}
            </p>
        </div>
    )
}

export default ImageCard