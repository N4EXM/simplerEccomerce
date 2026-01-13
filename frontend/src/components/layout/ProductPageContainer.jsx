import React, { useState } from 'react'

const ProductPageContainer = ({ children, name }) => {

    const [expand, setExpand] = useState(false)

    return (
        <div
            className={`w-full  flex flex-col gap-2 bg-white dark:bg-white/5 rounded-md shadow shadow-gray/20 p-5 py-4 ${expand ? 'min-h-fit h-fit ' : 'max-h-20'}`}
        >
            <div
                className='w-full h-fit font-medium flex flex-row items-center gap-2 text-darkGreen dark:text-white'
            >
                <button
                    className={`${expand ? 'rotate-0' : 'rotate-180'} duration-200 dark:text-green`}
                    onClick={() => setExpand(!expand)}
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24"><path d="M6.65 16h10.69c.64 0 .99-.76.56-1.24l-5.35-6.11a.753.753 0 0 0-1.13 0l-5.35 6.11c-.42.48-.08 1.24.56 1.24Z"></path></svg>
                </button>
                <p>
                    {name}
                </p>
            </div>
            {children}
        </div>
    )
}

export default ProductPageContainer