import React from 'react'

const ProductPageBtn = ({ icon, name, ftn, index, selectedPage }) => {
    return (
        <button
            className={`${index === 0 && 'rounded-tl-md'} ${selectedPage === name ? 'bg-white/50 dark:bg-black' : 'hover:bg-black/5'} text-black dark:text-white text-sm px-5 flex flex-row items-center gap-2  duration-200`}
            onClick={ftn}
        >
            <i
                className='text-darkGreen dark:text-green'
            >
                {icon}
            </i>
            <p
                className=''
            >
                {name}
            </p>
        </button>
    )
}

export default ProductPageBtn