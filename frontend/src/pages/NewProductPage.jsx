import React, { useEffect, useState } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import NormalInput from '../components/inputs/NormalInput'
import TextAreaInput from '../components/inputs/TextAreaInput'
import ImageInput from '../components/inputs/ImageInput'

const NewProductPage = () => {

    const [product, setProduct] = useState({
        name: '',
        description: '',
        images: []
    })

    const handleImages = (image) => {

        if (product.images.includes(image.name)) {
            const newImages = product.images.filter(image => image.name !== image.name)
            setProduct({...product, images: newImages})
        }   
        else {
            setProduct({...product, images: [...product.images, image]})
        }

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

                                let currentImage = null

                                const reader = new FileReader()
                                reader.onloadend = () => {
                                    currentImage = reader.result
                                }
                                reader.readAsDataURL(image);

                                return (
                                    <div>
                                        <img src={currentImage} alt="" />
                                    </div>
                                )

                            })          
                        }
                        <ImageInput
                            handleImages={handleImages}
                        />
                    </div>

                </div>

            </div>

            {/* second menu */}
            <div
                className='col-span-4 row-span-12 w-full h-full flex flex-col gap-5'
            >

            </div>

        </DashboardLayout>
    )
}

export default NewProductPage