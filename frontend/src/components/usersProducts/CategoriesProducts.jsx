import React from 'react'
import Separator from '../layout/Separator'
import MyProductCard from '../cards/MyProductCard'


const CategoriesProducts = ({ products, name }) => {
    return (
        <div
            className='w-full h-full flex flex-col dark:bg-white/5 bg-black/5 dark:shadow-slate-950 rounded-md shadow shadow-gray/50 min-w-80 dark:text-white'
        >
            <div
                className='flex flex-row items-center w-full h-fit p-4 pb-0 gap-2'
            >
                <i
                    className='text-darkGreen bg-green/30 dark:text-green dark:bg-white/10 p-1 rounded-full'
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="M9 9h6v6H9z"></path><path d="M20 6c0-1.1-.9-2-2-2h-2V2h-2v2h-4V2H8v2H6c-1.1 0-2 .9-2 2v2H2v2h2v4H2v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h4v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-4h2V8h-2zM6 18V6h12v12z"></path></svg>
                </i>
                <h2
                    className='text-base/tight font-medium'
                >
                    {name}
                </h2>
            </div>

            <div
                className='flex flex-col gap-2 w-full h-full p-4'
            >
                {
                    products.map((product) => (
                        <MyProductCard
                            key={product.id}
                            image={product.product_image_url}
                            name={product.name}
                            price={product.price}
                            stockAvailability={false}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default CategoriesProducts