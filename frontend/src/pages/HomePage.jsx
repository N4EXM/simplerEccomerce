import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import ProductCard from '../components/cards/ProductCard'
import { getProducts } from '../api_functions/productsAPI'

const HomePage = () => {

  // state
  const [products, setProducts] = useState([])

  const handleGetProducts = async () => {

    const response = await getProducts()

    console.log(response)

    if (response.success == true) {
      setProducts(response.products.data)
    }

  }

  

  useEffect(() => {
    handleGetProducts()
  }, [])

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <Layout>

      {/* outside container */}
      <div
        className='col-span-12 row-start-3 flex row-span-11 z-10 w-full h-full p-20 py-12 '
      >

        {/* main grid container */}
        <div
          className='w-full h-full p-5 py-4 bg-white dark:bg-black shadow shadow-gray/50 rounded-md grid grid-cols-12 grid-rows-12'
        >

          {/* filter options */}
          <div
            className='col-span-4 row-span-full'
          >
            filter options
          </div>

          {/* products */}
          <div
            className='grid grid-cols-3 gap-3 scrollbar-hide w-full h-full overflow-y-scroll col-span-8 row-span-full p-1'
          >
            {
              products.map((product) => (
                <ProductCard
                  image={product.product_image_url}
                  name={product.name}
                  price={product.price}
                />
              ))
            }
          </div>

        </div>
      </div>

    </Layout>
  )
}

export default HomePage