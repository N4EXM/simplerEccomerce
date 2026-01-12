import React from 'react'

const ProductViewer = ({ selectedProduct, viewer }) => {
    
    if (viewer === 0) {
        return (
            <div
                className='w-full h-full bg-black/5 shadow shadow-gray/30 rounded-md col-span-full row-span-10 '
            >

            </div>
        )
    }

}

export default ProductViewer