import React from 'react'

const ProductBtn = ({ icon, ftn, length, maxLength }) => {
    return (
        <button
            className={`p-1 bg-black/5 hover:bg-gray/20 ${length === 0 && 'rounded-l'} ${length + 1 === maxLength && 'rounded-r'} ${length + 1 !== maxLength && 'border-r border-black/10' }`}
        >
            {icon}
        </button>
    )
}

export default ProductBtn