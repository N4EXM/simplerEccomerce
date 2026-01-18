import React, { useEffect, useState } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import NormalInput from '../components/inputs/NormalInput'
import TextAreaInput from '../components/inputs/TextAreaInput'
import ImageInput from '../components/inputs/ImageInput'
import ImageCard from '../components/cards/ImageCard'
import CategoriesDropdown from '../components/layout/dropdowns/CategoriesDropdown'


const NewProductPage = () => {

    const [product, setProduct] = useState({
        name: '',
        description: '',
        thumbnail: null,
        images: [],
        category: null
    })

    const handleExtraImages = (image) => {

        if (product.images.includes(image)) {
            const newImages = product.images.filter(i => i !== image) 
            setProduct({...product, images: newImages})
        }   
        else {
            setProduct({...product, images: [...product.images, image]})
        }

    }

    const handleThumbnailImage = (image) => {

        if (product.thumbnail === image) {
            setProduct({...product, thumbnail: null})
        }
        else {
            setProduct({...product, thumbnail: image})
        }

    }

    const handleSelectedCategory = (category) => {

        setProduct({...product, category: category})

    }


    useEffect(() => {
        console.log(product)
    }, [product])

    return (
        <DashboardLayout>

            {/* first menu */}
            <div
                className='col-span-8 row-span-12 w-full h-full overflow-y-scroll scrollbar-hide flex flex-col gap-5 p-0.5 pb-1'
            >

                {/* general */}
                <div
                    className='flex flex-col gap-5 w-full h-fit bg-black/5 dark:bg-black p-5 rounded-md shadow shadow-gray/50 dark:shadow-slate-950'
                >

                    <div
                        className='flex flex-col gap-1 w-full h-fit'
                    >
                        <h1
                            className='font-semibold text-lg dark:text-white'
                        >
                            General
                        </h1>
                        <p
                            className='text-sm text-black/50 dark:text-white/50'
                        >
                            Enter a name and description to tell the customer what your product is about.
                        </p>
                    </div>

                    <NormalInput
                        type={'text'}
                        onChange={(e) => setProduct({...product, name: e.target.value})}
                        value={product.name}
                        placeholder={'Enter a name for your product...'}
                        name={'Product Name'}
                        isRequired={true}
                        extraInfo={'A name for your product is required to make it unique'}
                    />
                    
                    <TextAreaInput
                        type={'text'}
                        onChange={(e) => setProduct({...product, description: e.target.value})}
                        value={product.description}
                        placeholder={'Enter a description for the product...'}
                        name={'Description'}
                        isRequired={true}
                        extraInfo={'A description for your product is useful for customers'}
                    />

                </div>

                {/* extra images */}
                <div
                    className='flex flex-col gap-5 w-full h-fit bg-black/5 dark:bg-black p-5 rounded-md shadow shadow-gray/50 dark:shadow-slate-950'
                >
                    <div
                        className='flex flex-col gap-1 w-full h-fit'
                    >
                        <h1
                            className='font-semibold text-lg dark:text-white'
                        >
                            Media
                        </h1>
                        <p
                            className='text-sm text-black/50 dark:text-white/50'
                        >
                            Add extra images to your product to give the customer more of an idea of what they are buying.
                        </p>
                    </div>

                    <div
                        className='flex flex-row items-center gap-2'
                    >
                        {
                            product.images.map((image) => {

                                const imageUrl = URL.createObjectURL(image)

                                return (
                                    <ImageCard
                                        name={image.name}
                                        imageUrl={imageUrl}
                                        handleImages={() => handleExtraImages(image)}
                                    />
                                )

                            })          
                        }
                        {
                            product.images.length < 3
                            &&  <ImageInput
                                    handleImages={handleExtraImages}
                                />
                        }
                    </div>

                </div>

                {/* SEO */}
                <div
                    className='flex flex-col gap-5 w-full h-fit bg-black/5 dark:bg-black p-5 rounded-md shadow shadow-gray/50 dark:shadow-slate-950'
                >
                    <div
                        className='flex flex-col gap-1 w-full h-fit'
                    >
                        <h1
                            className='font-semibold text-lg dark:text-white'
                        >
                            SEO
                        </h1>
                        <p
                            className='text-sm text-black/50 dark:text-white/50'
                        >
                            Modify the SEO of your product to make it more accessible for customers
                        </p>
                    </div>  

                </div>

            </div>

            {/* second menu */}
            <div
                className='col-span-4 row-span-12 w-full h-full flex flex-col gap-5 overflow-y-scroll p-0.5 scrollbar-hide '
            >

                {/* thumbnail image */}
                <div
                    className='flex flex-col gap-5 w-full h-fit bg-black/5 dark:bg-black p-5 rounded-md shadow shadow-gray/50 dark:shadow-slate-950'
                >
                    <div
                        className='flex flex-col gap-1 w-full h-fit'
                    >
                        <h1
                            className='font-semibold text-lg dark:text-white'
                        >
                            Thumbnail
                        </h1>
                        <p
                            className='text-sm text-black/50 dark:text-white/50'
                        >
                            Add a Thumbnail image to your product, only jpeg or png file are accepted.
                        </p>
                    </div>  

                    <div
                        className='flex items-center justify-center w-full h-fit'
                    >
                        {
                            product.thumbnail === null
                            ?   <ImageInput
                                    handleImages={handleThumbnailImage}
                                />
                            :   <ImageCard
                                    imageUrl={URL.createObjectURL(product.thumbnail)}
                                    name={product.thumbnail.name}
                                    handleImages={() => handleThumbnailImage(product.thumbnail)}
                                />
                        }
                    </div>
                </div>

                {/* category selection */}
                <div
                    className='flex flex-col gap-5 w-full h-fit bg-black/5 dark:bg-black p-5 rounded-md shadow shadow-gray/50 dark:shadow-slate-950'
                >
                    <div
                        className='flex flex-col gap-1 w-full h-fit'
                    >
                        <h1
                            className='font-semibold text-lg dark:text-white'
                        >
                            Category
                        </h1>
                        <p
                            className='text-sm text-black/50 dark:text-white/50'
                        >
                            Apply a category to your product so it can be filtered by the customer.
                        </p>
                    </div>  
                    <CategoriesDropdown
                        selectedCategory={product.category}
                        handleSelectedCategory={handleSelectedCategory}
                    />
                </div>

            </div>

        </DashboardLayout>
    )
}

export default NewProductPage