import React from 'react'

const ProductCard = ({ image, name, price,  }) => {
    return (
        <div
            className='bg-white dark:bg-white/5 shadow shadow-gray/50 dark:shadow-gray/70 rounded w-full h-80 flex flex-col font-poppins'
        >
            {/* image container */}
            <div
                className='flex h-3/5 w-full p-6 items-center bg-white rounded-t'
            >
                <img 
                    src={image} 
                    alt="productImage" 
                />
            </div>

            {/* details */}
            <div
                className='flex flex-col justify-between w-full h-2/5 p-3 bg-gray/3'
            >
                <h1
                    className='dark:text-white text-black'
                >
                    {name}
                </h1>
                
                <div
                    className='flex flex-row items-end justify-between w-full h-fit'
                >
                    <p
                        className='font-medium text-base/tight dark:text-white text-black'
                    >
                        £{price}
                    </p>
                    <button
                        className='p-1 bg-darkGreen hover:bg-darkGreen/80 dark:bg-green dark:hover:bg-green/80  cursor-pointer duration-200 text-white rounded'
                    >
                        <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="M12.5 5v2.5H10v2h2.5V12h2V9.5H17v-2h-2.5V5z"></path><path d="M17.31 14H9.72L5.95 2.68A1 1 0 0 0 5 2H2v2h2.28l3.54 10.63A2 2 0 0 0 9.72 16h7.59a2 2 0 0 0 1.87-1.3l2.76-7.35-1.87-.7zM10 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4M17 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path></svg>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard