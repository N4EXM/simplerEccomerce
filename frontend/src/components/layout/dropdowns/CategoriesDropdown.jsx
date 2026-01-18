import React, { useEffect, useState } from 'react'
import { getCategories } from '../../../api_functions/CategoriesAPI'

const CategoriesDropdown = ({ selectedCategory, handleSelectedCategory }) => {

    // toggles
    const [toggleDropdown, setToggleDropdown] = useState(false)

    const [categories, setCategories] = useState([])

    const handleGetCategories = async () => {

        const response = await getCategories()

        console.log(response)

        if (response.success) {
            setCategories(response.categories)
        }
        else {
            console.log('failed to retrieve categories')
        }

    }

    const handleSelectingCategory = (category) => {

        setToggleDropdown(false)
        handleSelectedCategory(category)

    }

    useEffect(() => {
        handleGetCategories()
    }, [])

    return (
        <div
            className='w-full h-full relative text-gray dark:text-white/70'
        >
            {/* button and selectedCategory */}
            <button
                className='flex flex-row items-center justify-between w-full h-fit p-2 px-3 rounded-md bg-white text-sm shadow dark:bg-white/10 font-medium'
                onClick={() => setToggleDropdown(!toggleDropdown)}
            >
                <span>
                    {
                        selectedCategory === null
                        ? 'Select a category'
                        : selectedCategory.name
                    }
                </span>
                <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path></svg>
            </button>
            <div
                className={`${toggleDropdown ? 'flex' : 'hidden'} h-fit w-full absolute top-10 left-0 bg-white rounded-md shadow shadow-gray/50 dark:shadow-slate-950 flex-col`}
            >
                <div
                    className='flex flex-col w-full h-full p-1 dark:bg-black/90'
                >
                    {
                        categories.map((category) => (
                            <button
                                className='text-start p-2 px-3 text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10 rounded duration-200'
                                onClick={() => handleSelectingCategory(category)}
                            >
                                {category.name}
                            </button>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default CategoriesDropdown