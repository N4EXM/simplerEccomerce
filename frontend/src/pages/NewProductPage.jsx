import React, { useEffect, useState, useCallback } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import NormalInput from '../components/inputs/NormalInput'
import TextAreaInput from '../components/inputs/TextAreaInput'
import ImageInput from '../components/inputs/ImageInput'
import ImageCard from '../components/cards/ImageCard'
import CategoriesDropdown from '../components/layout/dropdowns/CategoriesDropdown'
import ToggleBtn from '../components/btns/ToggleBtn'
import { generateSlug } from '../utils/SEO_slug'


const NewProductPage = () => {

    const [product, setProduct] = useState({
        name: '',
        description: '',
        thumbnail: null,
        images: [],
        category: null,
        slug: '',
        quantity: null,
        sku: null,
        status: true
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

    const handleGenerateSlug = () => {
        setProduct({...product, slug: generateSlug(product.name)})
    }

    useEffect(() => {
        console.log(product)
    }, [product])

    return (
        <DashboardLayout>

            {/* title bar */}
            <div
                className='row-span-1 col-span-full w-full flex flex-row items-center justify-between p-0.5'
            >
                {/* product name */}
                <h1
                    className='text-2xl font-semibold dark:text-white text-darkGreen'
                >
                    {product.name}
                </h1>

                {/* publish button */}
                <button
                    className='p-1.5 w-fit h-fit px-3.5 duration-200 rounded text-white hover:text-white/80 font-medium bg-darkGreen hover:bg-darkGreen/50 dark:bg-green dark:hover:bg-green/70 text-sm flex flex-row items-center gap-1'
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M4 4h16v2H4zm8 4-5 6h4v7h2v-7h4z"></path></svg>
                    Publish
                </button>

            </div>


            {/* first menu */}
            <div
                className='col-span-8 row-span-11 w-full h-full overflow-y-scroll scrollbar-hide flex flex-col gap-5 p-0.5 pb-'
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
                        className='flex flex-row gap-2 w-full h-fit'
                    >
                        {
                            product.images.map((image) => {

                                const imageUrl = URL.createObjectURL(image)

                                return (
                                    <ImageCard
                                        key={image.name}
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
                
                    <div
                        className='w-full h-fit relative'
                    >
                        <NormalInput
                            type={'text'}
                            onChange={null}
                            value={product.slug}
                            placeholder={'Enter a slug for your product...'}
                            name={'Slug'}
                            isRequired={true}
                            extraInfo={'Enter a slug for your product to make it more discoverable by customers'}
                        />
                        <button
                            className='text-gray/80 dark:text-white/50 absolute top-8.5 right-3'
                            onClick={() => handleGenerateSlug()}
                        >
                            <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="M18.71 5.29a.996.996 0 0 0-1.41 0l-11 11a1 1 0 0 0-.29.71v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l11-11a.996.996 0 0 0 0-1.41l-3-3ZM9.59 19H8v-1.59l7.5-7.5 1.59 1.59zm8.91-8.91L16.91 8.5 18 7.41 19.59 9zM7 12c.26 0 .5-.15.61-.4l1.23-2.77 2.77-1.23c.24-.11.4-.35.4-.61s-.16-.5-.4-.61L8.84 5.15 7.61 2.38a.68.68 0 0 0-.6-.4c-.27-.02-.5.15-.61.39L5.17 5.04 2.39 6.38c-.23.11-.38.35-.38.61s.16.49.4.6l2.77 1.23 1.23 2.77c.11.24.35.4.61.4Zm14.76 6.63-1.66-.74-.74-1.66a.41.41 0 0 0-.36-.24c-.16-.01-.3.09-.37.23l-.74 1.6-1.67.8c-.14.07-.23.21-.23.37s.1.3.24.36l1.66.74.74 1.66a.404.404 0 0 0 .74 0l.74-1.66 1.66-.74a.404.404 0 0 0 0-.74Z"></path></svg>
                        </button>
                    </div>
                    

                </div>

                {/* stock */}
                <div
                    className='flex flex-col gap-5 w-full h-fit bg-black/5 dark:bg-black p-5 rounded-md shadow shadow-gray/50 dark:shadow-slate-950'
                >
                    <div
                        className='flex flex-col gap-1 w-full h-fit'
                    >
                        <h1
                            className='font-semibold text-lg dark:text-white'
                        >
                            Stock
                        </h1>
                        <p
                            className='text-sm text-black/50 dark:text-white/50'
                        >
                            How much quantity of this product do you have.
                        </p>
                    </div>  

                    <NormalInput
                        type={'number'}
                        onChange={(e) => setProduct({...product, quantity:e.target.value})}
                        value={product.quantity}
                        placeholder={'Stock quantity...'}
                        name={'Quantity'}
                        isRequired={true}
                        extraInfo={'Add a quantity for the stock so you can track metrics'}
                    />

                    <NormalInput
                        type={'text'}
                        onChange={(e) => setProduct({...product, sku: e.target.value })}
                        value={product.sku}
                        placeholder={'SKU number...'}
                        name={'SKU'}
                        isRequired={false}
                        extraInfo={'Add an SKU number so you can track it individually'}
                    />

                </div>

            </div>

            {/* second menu */}
            <div
                className='col-span-4 row-span-11 w-full h-full flex flex-col gap-5 overflow-y-scroll p-0.5 scrollbar-hide '
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

                {/* is it visible by customers */}
                <div
                    className='flex flex-col gap-5 w-full h-fit bg-black/5 dark:bg-black p-5 rounded-md shadow shadow-gray/50 dark:shadow-slate-950'
                >
                    <div
                        className='flex flex-col gap-1 w-full h-fit'
                    >
                        <h1
                            className='font-semibold text-lg dark:text-white'
                        >
                            Visibility
                        </h1>
                        <p
                            className='text-sm text-black/50 dark:text-white/50'
                        >
                            Do you want this product to be seen by others?
                        </p>
                    </div>  
                    <ToggleBtn
                        icon={<svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="M12 17c-5.35 0-7.42-3.84-7.93-5 .2-.46.65-1.34 1.45-2.23l-1.4-1.4c-1.49 1.65-2.06 3.28-2.08 3.31-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68.91 0 1.73-.1 2.49-.26l-1.77-1.77c-.24.02-.47.03-.72.03Zm9.95-4.68c.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68-1.84 0-3.36.39-4.61.97L2.71 1.29 1.3 2.7l4.32 4.32 1.42 1.42 2.27 2.27 3.98 3.98 1.8 1.8 1.53 1.53 4.68 4.68 1.41-1.41-4.32-4.32c2.61-1.95 3.55-4.61 3.56-4.65m-7.25.97c.19-.39.3-.83.3-1.29 0-1.64-1.36-3-3-3-.46 0-.89.11-1.29.3l-1.8-1.8c.88-.31 1.9-.5 3.08-.5 5.35 0 7.42 3.85 7.93 5-.3.69-1.18 2.33-2.96 3.55z"></path></svg>}
                        name={'Visibility'}
                        value={product.status}
                        ftn={() => setProduct({...product, status: !product.status})}
                    />
                </div>

            </div>

        </DashboardLayout>
    )
}

export default NewProductPage