import React, { useState } from 'react'
import ProductPageBtn from '../btns/ProductPageBtn'
import ProductPageContainer from '../layout/ProductPageContainer'
import ImageInput from '../inputs/ImageInput'

const ProductViewer = ({ selectedProduct, viewer }) => {

    // state
    const [selectedPage, setSelectedPage] = useState('content')

    const pageBtns = [
        {
            name: 'content',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox="0 0 24 24"><path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 5h14v14H5z"></path><path d="M7 15h10v2H7zM7 7h6v6H7z"></path></svg>
        },
        {
            name: 'reviews',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox="0 0 24 24"><path d="m4.83 12.49 2.04 1.83-.83 2.9-1 3.5c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02l3-2L12 18.19l2.45 1.63 3 2a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1-3.5-.83-2.9 2.04-1.83 2.5-2.25c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-3.15-.25-2.56-.2-2.47-5.46a.998.998 0 0 0-1.82 0L8.61 8.05l-2.56.2-3.15.25c-.4.03-.74.3-.87.68s-.02.8.28 1.06l2.5 2.25Zm1.39-2.25 2.52-.2.62-.05.59-.05.84-1.86 1.2-2.66 1.2 2.66.84 1.86.59.05.62.05 2.52.2.83.07-.77.69-2.5 2.25-.46.42.17.6 1.25 4.38-3.74-2.49-.55-.37-.55.37-3.74 2.49 1.25-4.38.17-.6-.46-.42L6.16 11l-.77-.69z"></path></svg>
        }
    ]

    const handlePageBtnChange = (page) => {

        setSelectedPage(page)

    }

    if (viewer === 0) {
        return (
            <div
                className='w-full h-full bg-black/5 dark:bg-black dark:shadow-slate-950 shadow shadow-gray/30 rounded-md col-span-full row-span-10 flex items-center justify-center'
            >

                <div
                    className='w-full h-fit flex flex-col gap-4 items-center justify-center'
                >
                    <i
                        className='w-fit bg-green/20 dark:bg-white/10 dark:text-green shadow shadow-gray/20 text-darkGreen p-2 rounded-full'
                    >
                        <svg  xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill={"currentColor"} viewBox="0 0 24 24"><path d="M3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-.16-.05-.31-.11-.44s-1.72-3.45-1.72-3.45A2 2 0 0 0 17.38 2H6.62c-.76 0-1.45.42-1.79 1.11L3.11 6.56c-.07.14-.11.29-.11.45v13Zm2 0V8h14v12zM17.38 4l1 2H5.62l1-2z"></path><path d="M12 13c-1.65 0-3-1.35-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.65-1.35 3-3 3"></path></svg>
                    </i>

                    {/* text */}
                    <div
                        className='flex flex-col items-center gap-2 w-fit h-fit'
                    >
                        <h1
                            className='font-medium dark:text-white'
                        >
                            No product has been selected
                        </h1>
                        <p
                            className='text-center text-sm text-gray dark:text-white/70 w-80'
                        >
                            Select a product to edit its details or create a new product.
                        </p>
                    </div>

                </div>

            </div>
        )
    }
    else if (viewer === 1) {
        return (
            <div
                className='w-full h-full bg-black/5 dark:bg-black dark:shadow-slate-950 shadow shadow-gray/30 rounded-md col-span-full row-span-10 grid grid-cols-12 grid-rows-12'
            >

                {/* pages btns */}
                <div
                    className='w-full h-full col-span-full row-span-1 rounded-t-md flex flex-row bg-black/5 dark:bg-white/5'
                >
                    {
                        pageBtns.map((btn, index) => (
                            <ProductPageBtn
                                index={index}
                                key={btn.name}
                                name={btn.name}
                                icon={btn.icon}
                                selectedPage={selectedPage}
                                ftn={() => handlePageBtnChange(btn.name)}
                            />
                        ))
                    }
                </div>

                {/* main container */}
                <div
                    className='flex flex-col gap-10 w-full h-full overflow-y-auto col-span-full row-span-11 p-5'
                >

                    {/* image editor */}
                    <ProductPageContainer
                        name={'Images'}
                    >
                        <div
                            className='w-full h-full flex flex-col gap-4 py-4'
                        >   
                            {/* main image */}
                            <div
                                className='flex flex-row items-center w-full h-fit'
                            >
                                <h2
                                    className='text-gray font-semibold'
                                >
                                    Main image <span className='text-rose-400'>*</span>
                                </h2>
                                <ImageInput></ImageInput>
                            </div>
                        </div>
                    </ProductPageContainer>

                </div>    

            </div>
        )
    }

}

export default ProductViewer